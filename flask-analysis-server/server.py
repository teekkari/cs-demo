from flask import Flask, request, abort
from flask_cors import CORS

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

    playerName = data['player']
    mapName = data['mapName']

    return 'OK'

app.run()