# CSGO Demo Analyzer

Hackathon style project for analyzing faceit CSGO demofiles. Based on old code of mine for scraping and parsing demofiles.

## Structure

Project consists of
- React SPA for customers to input a player name and view heat map of player positions
- Flask server for running demofile analysis with a python library
- NodeJS typescript server for managing data (implements basic CRUD)
- React SPA for data dashboard and database management