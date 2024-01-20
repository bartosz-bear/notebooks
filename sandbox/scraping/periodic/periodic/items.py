# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy

from itemloaders.processors import MapCompose, TakeFirst
from w3lib.html import remove_tags

def try_int(value):

    try:
        return int(value)
    except:
        return value

def try_float(value):
    try:
        return float(value)
    except ValueError:
        return value

class PeriodicItem(scrapy.Item):

    name = scrapy.Field(
        input_processor=MapCompose(remove_tags, str.strip),
        output_processor=TakeFirst()
    )
    symbol = scrapy.Field(
        input_processor=MapCompose(remove_tags, str.strip),
        output_processor=TakeFirst()
    )
    atomic_number = scrapy.Field(
        input_processor=MapCompose(remove_tags, str.strip, try_int),
        output_processor=TakeFirst()
    )
    atomic_mass = scrapy.Field(
        input_processor=MapCompose(remove_tags, str.strip, try_float),
        output_processor=TakeFirst()
    )
    chemical_group = scrapy.Field(
        input_processor=MapCompose(remove_tags, str.strip),
        output_processor=TakeFirst()
    )