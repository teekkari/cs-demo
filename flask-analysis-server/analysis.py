import threading
import requests

from demoutils.download import get_user_demo_urls, download_demofiles


def start_analysis(player, map_name, job_id):
    thread = threading.Thread(target=analysis_pipeline, args=(player, map_name, job_id))
    thread.start()


def analysis_pipeline(player, map_name, job_id):
    demo_urls = get_user_demo_urls(player, map_name)
    filenames = download_demofiles(demo_urls)

    # spawn threads for each file for parsing
    # and wait for all threads to exit
    analysis_threads = [threading.Thread(target=analyze_file, args=(file)) for file in filenames]
    for t in analysis_threads: t.start()
    for t in analysis_threads: t.join()

    requests.post('http://localhost:8000/jobs', data={ 'jobId': job_id })
    return


def analyze_file(filename):
    pass