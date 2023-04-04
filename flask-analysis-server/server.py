from flask import Flask, request, abort, Response
from flask_cors import CORS

import requests

from analysis import start_analysis

app = Flask(__name__)
CORS(app)

@app.route('/')
def baseRoute():
    print('test')
    return 'Hello world'


@app.route('/analyze', methods=['POST'])
def analyze():
    if (request.method != 'POST'):
        abort(400)

    data = request.json

    player_name = data['player']
    map_name = data['mapName']

    # send data-server jobStart
    requests.post('localhost:8000/jobs')

    # start analyzing players
    # pipeline will send jobEnd to data-server
    start_analysis(player_name, map_name)

    return Response(status=200)

app.run()