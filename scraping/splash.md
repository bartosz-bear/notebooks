## SPLASH

- splash only works with CSS selectors, it doesn't work with XPATH selectors
- splash is using Apple's WebKit engine, therefore you should expect behaviors similar to Safari

## HOW TO START SPLASH?

- start WSL2

- run the following command from WSL2

`docker run --name splash-test -p 8050:8050 -d scrapinghub/splash`

- open in your browser at `localhost:8050`

<https://dev.to/dendihandian/getting-started-with-splash-in-docker-4ddc>

## BASIC CONFIGURATION

```lua
function main(splash, args)
 url = args.url -- take url from arguments passed inside the Splash browser
 assert(splash:go(url)) -- make sure url is valid (doesn't return HTTP 400)
 assert(splash:wait(1)) -- wait 1 second for the page to render fully
 return {
    image = splash:png(), -- show a png image of the website
    html = splash:html() -- show the html of the website
  }
end
```

## SELECTING ELEMENTS ON THE PAGE

## SELECT A SINGLE ELEMENT

```lua
input_box = assert(splash:select("#search_form_input_homepage"))
```

## SELECTING MULTIPLE ELEMENTS

```lua
li_elements = assert(splash:select_all("li"))
```

## FOCUS ON AN ELEMENT

```lua
 input_box:focus()
```

## SEND TEXT AN INPUT BOX

```lua
 input_box:send_text("my user agent")
 assert(splash:wait(0.5))
```

## SELECT A BUTTON AND CLICK ON IT

```lua
 btn = assert(splash:select("#search_button_homepage"))
 btn:mouse_click()
 assert(splash:wait(2))
```

## SEND 'ENTER' KEYBOARD PRESS

```lua
 input_box:send_keys("<Enter>")
 assert(splash:wait(2))
```

## SHOW IMAGE OF A FULL PAGE

```lua
 splash:set_viewport_full()
```

## CHANGE USER AGENT

```lua
function main(splash, args)
  splash:set_user_agent("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0")
 return {
  }
end
```

Or like this:

```lua
function main(splash, args)
  headers = {
    ['User-Agent'] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0"
  }
 splash:set_custom_headers(headers)
 return {
  }
end
```

Or like this:

```lua
function main(splash, args)
 splash:on_request(function(request)
    request:set_header('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0')
 end)
  return {
  }
end
```


## BASIC LUA TUTORIAL

<https://tylerneylon.com/a/learn-lua/>