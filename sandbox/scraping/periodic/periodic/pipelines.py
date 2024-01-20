# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import sqlite3
import copy
import json

class PeriodicPipeline:
    def process_item(self, item, spider):
        return item

class GroupedElementsPipeline:
    def __init__(self):
        self.elems = {}

    def process_item(self, item, spider):
        cg = item['chemical_group']

        if cg not in self.elems:
            self.elems[cg] = {'element_count': 0, 'elements': []}

        item_copy = copy.deepcopy(item)
        del item_copy['chemical_group']

        self.elems[cg]['elements'].append(dict(item_copy))
        self.elems[cg]['element_count'] += 1

        return item
    
    def close_spider(self, spider):
        with open('grouped_elements.json', 'w') as f:
            json.dump(self.elems, f)


class SaveToDatabasePipeline():
    def __init__(self):
        self.con = sqlite3.connect('periodic.db')
        self.cur = self.con.cursor()

    def open_spider(self, spider):
        self.cur.execute("""
                         CREATE TABLE IF NOT EXISTS periodic_table
                         (id INTEGER PRIMARY KEY,
                         name TEXT,
                         symbol TEXT,
                         atomic_number INTEGER,
                         atomic_mass REAL,
                         chemical_group TEXT);
                         """)
        self.con.commit()

    def process_item(self, item, spider):
        self.con.execute("""
                         INSERT INTO periodic_table (name, symbol, atomic_number, atomic_mass, chemical_group) VALUES (?, ?, ?, ?, ?)
                         """, (item['name'],
                                item['symbol'],
                                item['atomic_number'],
                                item['atomic_mass'],
                                item['chemical_group']))
        self.con.commit()

        return item
        
    def close_spider(self, spider):
        self.con.close()
