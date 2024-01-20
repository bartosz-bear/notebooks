import requests as r
from bs4 import BeautifulSoup
from rich import print, inspect, pretty
import re

tickers = ['BNS:TSE',
           'GOOGL:NASDAQ',
           'SHOP:TSE',
           'MSFT:NASDAQ']

res = r.get('https://www.google.com/finance/quote/BNS:TSE').content
soup = BeautifulSoup(res, 'lxml')

tag = soup.find_all(lambda x: x.name == 'div' and\
                      x.has_attr('data-currency-code') and\
                      x.has_attr('data-last-price'))

currency_code = tag[0]['data-currency-code']
price = float(tag[0]['data-last-price'])

breakpoint()

'''

def is_price_div(tag):

    return tag.name == 'div' and\
           '%' not in tag.text and\
           re.search('[+0-9]', tag.text) and\
           tag.attrs.get('class') and\
           len(tag.attrs.get('class')) == 2 and\
           tag.parent.name == 'div' and\
           tag.parent.has_attr('jsname') and\
           tag.parent.has_attr('class') and\
           tag.parent.parent.name == 'span' and\
           tag.parent.parent.parent

def get_fx():

    res = r.get('https://www.google.com/finance/quote/USD-CAD').content
    soup = BeautifulSoup(res, 'lxml')

    return float(soup.find_all(is_price_div)[0].text)


stocks = {}
for t in tickers:
    res = r.get(f'https://www.google.com/finance/quote/{t}').content
    soup = BeautifulSoup(res, 'lxml')

    price = float(soup.find_all(is_price_div)[0].text.strip('$'))

    stocks.update({t: {'price': price}})

usd_cad = get_fx()

stocks_keys = list(stocks)
for s in stocks_keys:
    if 'TSE' in s:
        stocks[s]['price'] = stocks[s]['price'] / usd_cad

print(stocks)

'''