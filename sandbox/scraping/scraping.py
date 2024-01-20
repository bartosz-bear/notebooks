from bs4 import BeautifulSoup

import requests as r

from rich import print, pretty, inspect

import pandas as pd

html = r.get('https://books.toscrape.com/').content

soup = BeautifulSoup(html, 'lxml') 

#with open("books_to_scrape.html", "w") as file:
#    file.write(str(soup))

string_to_integer = {'One': 1,
           'Two': 2,
           'Three': 3,
           'Four': 4,
           'Five': 5,
           'Six': 6}

product_pods = soup.find_all('article', attrs={'class': 'product_pod'})
titles = [p.h3.a['title'] for p in product_pods]
prices = [p.find('div', attrs={'class':'product_price'}).find('p', class_='price_color').text for p in product_pods]
prices = [float(p.strip('£')) for p in prices]
ratings = [string_to_integer[p.find('p', class_='star-rating')['class'][1]] for p in product_pods]

books = []
for t, p, r in zip(titles, prices, ratings):
    books.append({'title': t,
                  'price': p,
                  'rating': r})

df = pd.DataFrame(books)

def has_id(item):

    return item.has_attr('id')

ids = soup.find_all(has_id)

breakpoint()

print('hello')