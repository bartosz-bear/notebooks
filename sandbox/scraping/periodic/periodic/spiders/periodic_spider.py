import scrapy
from scrapy_playwright.page import PageMethod


from scrapy.loader import ItemLoader
from periodic.items import PeriodicItem

class PeriodicSpiderSpider(scrapy.Spider):
    name = "periodic_spider"
    allowed_domains = ["pubchem.ncbi.nlm.nih.gov"]
    start_urls = ["https://pubchem.ncbi.nlm.nih.gov/ptable/"]

    def start_requests(self):
        yield scrapy.Request(
            self.start_urls[0],
            meta={
                'playwright': True,
                'playwright_page_methods': [PageMethod('div.element')]
            }
        )

    def parse(self, response):

        elements = response.css('div.element')

        for e in elements:
            
            item = ItemLoader(item=PeriodicItem(), selector=e)

            item.add_css('name', 'button>div[data-tooltip="Name"]')
            item.add_css('symbol', 'button>div[data-tooltip="Symbol"]')
            item.add_css('atomic_number', 'button>div:nth-child(1)>div[data-tooltip="Atomic Number"]')
            item.add_css('atomic_mass', 'button>div:nth-child(1)>div[data-tooltip*="Atomic Mass"]')
            item.add_css('chemical_group', 'button>div[data-tooltip="Chemical Group Block"]>span')

            #breakpoint()

            yield item.load_item()

        '''
        elements = response.css('div.element')

        for e in elements:
            #breakpoint()
            yield {'name': e.css('button>div[data-tooltip="Name"]::text').get(),
                   'symbol': e.css('button>div[data-tooltip="Symbol"]::text').get(),
                   'atomic_number': e.css('button>div:nth-child(1)>div[data-tooltip="Atomic Number"]::text').get(),
                   'atomic_mass': e.css('button>div:nth-child(1)>div[data-tooltip="Atomic Mass, u"]::text').get(),
                   'chemical_group': e.css('button>div[data-tooltip="Chemical Group Block"]>span::text').get()
                   }
        '''
