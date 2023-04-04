#https://github.com/ajohnsen/faceit-demo-downloader/blob/master/download.py


import requests
import urllib
import gzip
import time

import cfscrape

import os
import dotenv
dotenv.load_dotenv()

API_KEY = os.getenv('FACEIT_API_KEY')

### URLs for Faceit API

# Player info = nickname -> player_id
API_PLAYER_INFO_URL = "https://open.faceit.com/data/v4/players"

# Match history = player_id -> [match_ids]
API_MATCH_HISTORY_URL = "https://open.faceit.com/data/v4/players/{player_id}/history"

# Match info = match_id -> map_name, demo_url
API_MATCH_INFO_URL = "https://open.faceit.com/data/v4/matches/{match_id}"

# API Key in Auth header
# Fake user-agent needed for demo download
headers = {
    'Authorization': 'Bearer ' + API_KEY,
}

def get_user_demo_urls(nickname, target_map, match_fetch_limit=3):

    # Get player id from nickname
    res = requests.get(API_PLAYER_INFO_URL, params={'nickname': nickname}, headers=headers)
    player_id = res.json()['player_id']

    # Get latest matches
    res = requests.get(API_MATCH_HISTORY_URL.format(player_id=player_id), params={
        'game': 'csgo', 
        'offset': 0,
        'limit': 20
    }, headers=headers)

    # Parse map name and demo url from latest matches
    demo_urls = []
    for match in res.json()['items']:

        match_id = match['match_id']

        # get info on specific match
        res = requests.get(API_MATCH_INFO_URL.format(match_id=match_id), headers=headers)

        demo_url = res.json()['demo_url'][0]
        match_map = res.json()['voting']['map']['pick'][0]

        # if match is on target map, add demo url to list
        if match_map == target_map:
            demo_urls.append(demo_url)

        # stop processing is enough matches are found
        if len(demo_urls) >= match_fetch_limit:
            break

    return demo_urls


def download_demofiles(demo_urls):

    filenames = []
    
    for url in demo_urls:

        output_file = url.split("/")[-1].replace('.gz', '')
        filenames.append(output_file)

        print("Downloading", output_file)

        # Download archive
        try:
            cfdownloader = cfscrape.create_scraper()
            with cfdownloader.get(url, stream=True) as response:

                with gzip.GzipFile(fileobj=response.raw) as uncompressed:
                    file_content = uncompressed.read()

            # write to file in binary mode 'wb'
            with open(output_file, 'wb') as f:
                f.write(file_content)

        except Exception as e:
            print(e)

    return filenames