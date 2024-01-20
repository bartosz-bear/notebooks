from selectolax.parser import HTMLParser

from playwright.sync_api import sync_playwright

def extract_full_body_html(url):

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        page = browser.new_page()
        page.goto(url)

        TIMEOUT = 9000
        page.wait_for_load_state("networkidle", timeout=TIMEOUT)
        page.wait_for_selector('div.visualization-section__data')

        return page.inner_html("body")

def extract_budget(html):
    tree = HTMLParser(html)
    budget_div = tree.css_first('div.visualization-section__data')
    return budget_div.text()

if __name__ == '__main__':
    url = 'https://www.usaspending.gov/agency/department-of-defense?fy=2023'
    html = extract_full_body_html(url)
    print(extract_budget(html))