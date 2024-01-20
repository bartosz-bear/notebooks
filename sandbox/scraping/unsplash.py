import requests
from bs4 import BeautifulSoup
from rich import pretty, print, inspect
from dataclasses import dataclass

import logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s %(levelname)s %(message)s')

@dataclass
class Image:
    resolution: int
    img_link: str
    

def scrape(word, limit):

    url = f"https://unsplash.com/napi/search/photos?per_page={limit}&query={word}"

    payload = {}
    headers = {
    'authority': 'unsplash.com',
    'accept': '*/*',
    'accept-language': 'en-US',
    'cookie': 'require_cookie_consent=false; xp-remove-load-more-on-search=control; xp-plus-pricing-popover=control; _ga=GA1.1.229587379.1701613314; _sp_ses.0295=*; uuid=4f4ddd80-91e7-11ee-bf60-f3bc912062a5; lux_uid=170161331533061843; azk-ss=true; _ga_21SLH4J369=GS1.1.1701613313.1.1.1701613528.0.0.0; _sp_id.0295=e0d1b077-8969-4c3a-a364-8d7ff11bfacb.1701613314.1.1701613529..34f10827-c29e-491e-806a-283c8b8ad34f..ca720b3f-98ac-4d26-b94c-66335e4f1611.1701613314839.9; require_cookie_consent=false',
    'referer': 'https://unsplash.com/s/photos/water',
    'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
    }

    logging.info('Requesting results...')
    results = requests.request("GET", url, headers=headers, data=payload).json()['results']

    results = [r for r in results if r['premium'] == False]

    images = []
    for r in results:
        resolution = r['width'] * r['height']
        img_link = r['links']['download']
        images.append(Image(resolution=resolution, img_link=img_link))

    sorted_images = sorted(images, key=lambda x: x.resolution, reverse=True)

    logging.info('Getting the best pic...')
    top_image = requests.get(sorted_images[0].img_link)

    with open(f"{word}_img.jpg", mode="wb") as file:
        logging.warning('And saving the file locally...')
        file.write(top_image.content)

def scrape_html(word, limit):

    url = f'https://unsplash.com/s/photos/{word}'

    res = requests.get(url)

    soup = BeautifulSoup(res.content, 'lxml')

    figures = soup.find_all('figure', {'itemprop': 'image'})

    images = []
    for f in figures:
        premium = 'premium' in f.find('img', {'itemprop': "thumbnailUrl"})['src']

        if not premium:

            try:
                download = f.find('a', {'title': 'Download photo', 'download': True})['href']
            except TypeError:
                download = ''

            size = f.find('img', {'itemprop': 'thumbnailUrl'})['style']

            size = size[13:].split(' / ')
            resolution = int(size[0]) * int(size[1])

            images.append(Image(resolution=resolution, img_link=download))

    sorted_images = sorted(images, key=lambda x: x.resolution, reverse=True)

    top_image = requests.get(sorted_images[0].img_link)

    with open(f"{word}_img_from_html.jpg", mode="wb") as file:
        file.write(top_image.content)

if __name__ == '__main__':
    scrape('scotland', 10)
    scrape_html('paris', 10)