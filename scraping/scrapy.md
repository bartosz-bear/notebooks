## SCRAPING

## WHAT CAN BE SCRAPED FROM THE WEB?

- html
- images
- videos
- emails

## SCRAPY COMPONENTS

1. Spiders
2. Pipelines
3. Middlewares
4. Engine
5. Scheduler

## SPIDERS

5 types of spiders are available in Scrapy

1. scrapy.Spider
2. CrawlSpider
3. XMLFeedSpider
4. CSVFeedSpider
5. SitemapSpider

Spiders see websites without JavaScript

## PIPELINES

- cleaning the data
- remove duplicates
- storing data

## MIDDLEWARES

Request/Response related. Can do things like injecting custom headers or proxying.

- Downloader Middleware (responsible for handling requests)
- Spider Middleware (responsible for extracting data)

## ENGINE

Responsible for coordinating of all other components

## SCHEDULER

Responsible for order of operations in time.
Queue data structure

## `robots.txt`

`robots.txt` gives guidelines to the spider and tell them whether they wanted to be scraped or not, and how

1. `User-Agent` - identity of the spider
2. `Allow` - specifies which pages are allowed for spiders
3. `Disallow` - which pages are forbidden for spiders

## SCRAPY COMMANDS

`scrapy bench` - runs a quick benchmark test see to see how fast scrapy is requesting pages at this point of time

`scrapy fetch http://google.com` - get raw HTML markup of a page

`scrapy genspider` - generates a new spider using pre-defined templates

`scrapy runspider` - run a self-contained spider (without creating a project)

`scrapy settings`

`scrapy shell` - useful for debugging, and HTML exploration

`scrapy startproject`

`scrapy view http://google.com` - open URL in browser, as seen by Scrapy

## CREATE A NEW SCRAPY PROJECT

`scrapy startproject project_name`

## FETCHING URLS FROM SHELL

`fetch('https://www.worldometers.info/world-population/population-by-country/')`

## SCRAPY REQUEST OBJECT

`r = scrapy.Request(url='https://www.worldometers.info/world-population/population-by-country/')`

`fetch(r)`

## GET THE RESPONSE BODY

`response.body`

## HOW TO OPEN DEV TOOLS IN CHROME WITH SHORT-CUT?

Ctrl+Shift+I

## HOW TO OPEN COMMAND LINE IN CHROME DEV TOOLS?

Ctrl+Shift+P

## HOW TO REFRESH PAGE WITH SHORT-CUT IN CHROME?

Ctrl+R

## FETCHING A SINGLE HTML ELEMENT USING XPATH SELECTOR

```python
title = response.xpath('//h1/text()')
title.get() # will return XPATH selector object [<Selector xpath='descendant-or-self::h1/text()' data='Countries in the world by population ...'>]
```

## FETCHING A SINGLE HTML ELEMENT USING CSS SELECTOR

```python
title_css = response.css("h1::text")
title_css.get() # will ALSO return XPATH selector object [<Selector xpath='descendant-or-self::h1/text()' data='Countries in the world by population ...'>]
```

## FETCHING A COLLECTION OF HTML ELEMENTS USING XPATH SELECTOR

```python
countries = response.xpath('//td/a/text()').getall() # returns a Python list of countries
```

## FETCHING A COLLECTION OF HTML ELEMENTS USING CSS SELECTOR

```python
countries_css = response.css('td a::text').getall()
```

## `scrapy.Spider` OBJECT

- we return data from `scrapy.Spider` as a dictionary