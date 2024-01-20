import requests as r
from rich import print, inspect, pretty

res = r.get('https://api.coinbase.com/v2/exchange-rates?currency=BTC')

params = {
    'lat': 52.22977000,
    'lng': 21.01178000,
    'timezone': 'UTC+1',
    'date': 'today'
}

sun = r.get('https://api.sunrisesunset.io/json', params=params)

options = r.request('OPTIONS', 'https://www.example.com/')

breakpoint()

#https://httpbin.org/headers