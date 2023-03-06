import asyncio

class APIError(Exception):
    def __init__(self, message):
        self._message = message

    def __str__(self):
        return sefl._message

async def call_api_failed():
    await asyncio.sleep(3)
    raise APIError('Api failed')

async def call_api(message, result, delay=3):
    print(message)
    await asyncio.sleep(delay)
    return result

async def main():
    a, b, c = await asyncio.gather(
        call_api('Calling API 1', 100, 1),
        call_api('Calling API 2', 200, 2),
        call_api_failed()
    )
    print(a,b,c)

asyncio.run(main())