import scrapy
from scrapy_playwright.page import PageMethod

class PositionsSpider(scrapy.Spider):
    name = "positions"
    allowed_domains = ["trafigura.wd3.myworkdayjobs.com"]
    start_urls = ["https://trafigura.wd3.myworkdayjobs.com/TrafiguraCareerSite"]
    #https://careers.trafigura.com/TrafiguraCareerSite/search

    def start_requests(self):
        yield scrapy.Request(
            self.start_urls[0],
            meta={
                'playwright': True,
                'playwright_page_methods': [PageMethod("wait_for_selector", 'section'),
                                            PageMethod("wait_for_selector", 'ul'),
                                            PageMethod("wait_for_selector", 'dd')]
            }
        )

    def parse(self, response):
        
        jobs = response.css("section>ul[role='list']>li")
        for j in jobs:
            yield {
                'title': j.css('div:nth-child(1)>div>div>h3 a::text').get(),
                'location': j.css('div:nth-child(2) div div dl dd::text').get(),
                'posted': j.css('div:nth-child(3) div div dl dd::text').get()
            }