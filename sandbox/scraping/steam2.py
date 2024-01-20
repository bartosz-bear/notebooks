import requests

url = "https://api.steampowered.com/IStoreBrowseService/GetItems/v1?origin=https:%2F%2Fstore.steampowered.com&input_protobuf_encoded=CgQY2KUBCgQY7MEBCgQYk%2BEBCgQYz%2FcBCgQY25ECCgQY1ZcCCgQYlpoCCgQQv5QBCgQQ0d4BCgQQ5usBCgQQ%2FJYECgQQybMFCgQQz8IHCgQQ%2B88HCgQQrKMMCgQQypsNCgQQzJ4SCgQQpbgWCgQQpbcXCgQQyvoXCgQQqfYZCgQQqtkaCgQQsM4bCgQQorQcCgQQzqUiCgQQxsIlCgQQjvAmCgQQjvwvCgQQ1o0xCgQQp6UxCgQQ25gyCgQQzaE0CgQQ%2Fa84CgQQuaE5CgQI%2BtUqCgQIuu9gEg8KB2VuZ2xpc2gaAlBMIAEaEggBEAEYASgBMAFAFEgBUAFYAQ%3D%3D"

payload = {}
headers = {
  'authority': 'api.steampowered.com',
  'accept': 'application/json, text/plain, */*',
  'accept-language': 'en-US,en;q=0.9,pl;q=0.8',
  'origin': 'https://store.steampowered.com',
  'referer': 'https://store.steampowered.com/',
  'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"macOS"',
  'sec-fetch-dest': 'empty',
  'sec-fetch-mode': 'cors',
  'sec-fetch-site': 'same-site',
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
}

response = requests.request("GET", url, headers=headers, data=payload)

breakpoint()

print(response.text)
