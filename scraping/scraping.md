## SCRAPING

## HOW DO YOU CHECK WHAT HEADERS THE SERVER RECEIVE FROM MY REQUEST?

- there is a service which sends back the headers which were sent in the request 'https://httpbin.org/headers'

```python
import requests as r

res = r.get('https://httpbin.org/headers')

sent_headers = res.json()
```

- another way is to read the `request` attribute of the response objec `res.request.headers`
- however these two are not always the same

## USEFUL TOOLS FOR SCRAPING

<https://httpie.io/>

<https://www.postman.com/>