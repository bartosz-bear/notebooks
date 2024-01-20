import re

from selectolax.parser import HTMLParser

from typing import List

from bs4 import BeautifulSoup

from playwright.sync_api import sync_playwright

from dataclasses import dataclass

import logging

logging.basicConfig(level=logging.INFO, format='%(asctime)s %(levelname)s %(message)s')

@dataclass
class GameOnSale():
    title: str
    img_url: str
    tags: List[str]
    rating: str
    reviews_count: int
    original_price: str
    discount_pct: float

    def __post_init__(self):
        if not self.discount_pct:
            self.discount_pct = 0

def main(url):
    
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        page = browser.new_page()
        page.goto(url)

        TIMEOUT = 9000
        
        #page.wait_for_selector('div.ImpressionTrackedElement')

        page.evaluate("() => window.scroll(0, document.body.scrollHeight)")
        page.wait_for_load_state('networkidle', timeout=TIMEOUT)

        body = page.inner_html("body")

        soup = BeautifulSoup(body, 'lxml')

    logging.info('Soup is ready...')

    banners = soup.find_all('div', class_='ImpressionTrackedElement')
    sales_banners = [b for b in banners if b.find('div', {'class': re.compile(r'StoreSaleWidgetTitle')})]

    games_on_sale = []
    for b in sales_banners:
        title = b.find('div', class_='StoreSaleWidgetTitle').text
        img_url = b.find('div', class_='CapsuleImageCtn').img['src']
        tags = [x.text for x in b.find_all('a', class_='WidgetTag')]
        rating = b.find('a', class_='ReviewScore').div.div.text
        reviews_count = b.find('a',class_='ReviewScore').div.find('div', {'class': re.compile(r'ReviewScoreCount')}).text
        reviews_count = int(reviews_count[2:][:-13].replace(',', ''))
        price = b.find('div', {'class': re.compile(r'StoreSalePriceBox')}).text
        try:
            discount_pct = b.find('div', {'class': re.compile(r'StoreSaleDiscountBox')}).text
            discount_pct = float(discount_pct[1:][:-1]) / 100
        except AttributeError:
            discount_pct = None

        games_on_sale.append(GameOnSale(title,
                                        img_url,
                                        tags,
                                        rating,
                                        reviews_count,
                                        price,
                                        discount_pct))
        

    breakpoint()

if __name__ == '__main__':
    url = 'https://store.steampowered.com/specials'
    main(url)