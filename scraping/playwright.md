## PLAYWRIGHT

## HOW TO INSTALL PLAYWRIGHT ON WSL?

1. Activate conda environment
2. Install scrapy `conda install -c conda-forge scrapy`
3. Install playwright `playwright install`
4. Install scrapy-playwright `pip install scrapy-playwright`
5. Install playwright library in Python `pip install playwright` [NOT SURE IF THIS IS NECESSARY]
6. Update playwright dependencies `playwright install-deps`

## HOW TO INSTALL PLAYWRIGHT ON MAC?

1. pip install playwright
2. playwright install chromium

## BASIC USE

```python
from playwright.sync_api import sync_playwright

with sync_api() as p:
    browser = p.chromium.launch(headless=False)
    page = browser.new_page()
    page.goto(url)
```
## DIFFERENT METHODS TO ENSURE THAT DESIRED TAGS ARE RENDERED

## WAIT UNTIL STATUS IS `networkidle`

```python
TIMEOUT = 9000 # 9 seconds
page.wait_for_load_state('networkidle', timeout=TIMEOUT)
```

## SCROLL TO THE BOTTOM OF THE PAGE

```python
page.evaluate('() => window.scroll(0, document.body.scrollHeight)')
```

## WAIT UNTIL A SPECIFIC TAG IS DISPLAYED

```python
page.wait_for_selector('div.my_class')
```

## COMBINE SEVERAL METHODS FOR HIGHER EFFECT

```python
# Move the page down
page.evaluate('() => window.scroll(0, document.body.scrollHeight)')

# And wait
page.wait_for_load_state('networkidle', timeout=TIMEOUT)

```

## HOW DO YOU MAKE A PRINT SCREEN OF A PAGE?

```python
page.screenshot(path='steam2.png', full_page=True)
```

## MORE ROBUST WAITS FOR PAGE TO LOAD

```python
page.wait_for_load_state('domcontentloaded')
```

## USING CONTAINS IN A WAIT FOR SELECTOR METHOD

```python
page.waif_for_selector('div[class*="my_specific_class"]')
```

## PLAYWRIGHT FOR PYTHON

<https://playwright.dev/python/docs/intro>

## HOW TO USE PLAYWRIGHT FOR PYTHON?

<https://scrapfly.io/blog/web-scraping-with-playwright-and-python/#clicking-buttons-and-text-input>

## SCRAPY-PLAYWRIGHT

<https://github.com/scrapy-plugins/scrapy-playwright>

## PLAYWRIGHT DOCUMENTATION

<https://playwright.dev/python/docs/api/class-playwright>

## PLAYWRIGHT XPATH SELECTORS

<https://www.programsbuzz.com/article/playwright-xpath-selectors>

## ARIA ROLES

<https://www.w3.org/TR/wai-aria-1.2/#roles>

## TUTORIALS

<https://scrapfly.io/blog/web-scraping-with-playwright-and-python/#clicking-buttons-and-text-input>

<https://automationpanda.com/2021/12/03/want-to-learn-playwright-with-python-take-this-workshop/>

## RESEARCH

<https://blog.apify.com/playwright-vs-selenium-webscraping/>

<https://scrapeops.io/python-scrapy-playbook/scrapy-playwright/>