import requests as r
from rich import print, inspect, pretty

from selectolax.parser import HTMLParser

res = r.get('https://en.wikipedia.org/wiki/Rare-earth_element')

tree = HTMLParser(res.text)

breakpoint()