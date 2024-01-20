import requests

from rich import print, inspect, pretty

from dataclasses import dataclass

from typing import Tuple

@dataclass
class Job:
    title: str
    full_part: Tuple[bool, bool]
    distance: Tuple[float, float]
    requirements: str

url = "https://api.higherme.com/classic/jobs?page=1&includes=location,location.company,location.externalServiceReferences&limit=24&filters\\[brand.id\\]=58bd9e7f472bd"

payload = {}
headers = {
  'authority': 'api.higherme.com',
  'accept': 'application/json, text/plain, */*',
  'accept-language': 'en-US,en;q=0.9,pl;q=0.8',
  'higherme-client-version': '2023.12.01_38.0b',
  'origin': 'https://app.higherme.com',
  'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"macOS"',
  'sec-fetch-dest': 'empty',
  'sec-fetch-mode': 'cors',
  'sec-fetch-site': 'same-site',
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
}

response = requests.request("GET", url, headers=headers, data=payload)

items = response.json()['data']

jobs = []
for i in items:
    data = i['attributes']
    lat = i['relations']['location']['attributes']['latitude']
    lon = i['relations']['location']['attributes']['longitude']
    jobs.append(Job(data['title'],
                    (data['full_time'],data['part_time']),
                    (lat, lon),
                    data['requirements']
                    ))