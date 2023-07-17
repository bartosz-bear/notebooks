## ELASTIC SEARCH

The fields starting with an underscore are all meta fields of the result.

The `_source` object is the original document that was indexed.

## APACHE LUCENE

Lucence - open source library designed for collecting, indexing and searching information. It's a library engine behind Elastic Search.

## INDEXING

- library user includes sources of data (documents) as well as fields which will be indexed
- each document can potentially have a different structure

## INVERTED INDEX

- it's a database index storing a mapping from content, such as words or numbers, to its locations in a table, or in a document or a set of documents (named in contrast to a forward index, which maps from documents to content)
- the purpose of an inverted index is to allow fast full-text searches, at a cost of increased processing when a document is added to the database
- it is the most popular data structure used in document retrieval systems, used on a large scale for example in search engines

## SEARCH

- it's possible to search by single words as well as fragments of text, wildcards and logical operators

<https://www.elastic.co/guide/en/elasticsearch/reference/current/search-your-data.html>


## QUERY

<https://logz.io/blog/elasticsearch-queries/>

## QUERY EXAMPLES

```json
query = {
    "query": {
        "match": {
            "gc_transaction": "be7a70ca1d7a1ca3"
        }
    }
}
```

```json
query = {
    "query": {
        "bool": {
            "must": [{
                "term": {"best.country_code": "US"},
            },
            {
                "range": {
                    "dist_to_border": {"gte":0,
                                "lte":100}
                }
            }]
        }
    }
}
```

## RUNTIME MAPPINGS



## QUERY DSL

<https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html>

## RESEARCH

<https://stackoverflow.com/questions/47003336/elasticsearch-index-sharding-explanation>

What is Lucene index?
<https://www.youtube.com/watch?v=T5RmMNDR5XI&t=58s>

## TUTORIALS

<https://logz.io/blog/elasticsearch-tutorial/>
