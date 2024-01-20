import requests
import json

from rich import print, inspect, pretty

url = "https://use1-prod-th.rbictg.com/graphql"

payload = json.dumps([
  {
    "operationName": "GetRestaurants",
    "variables": {
      "input": {
        "filter": "NEARBY",
        "coordinates": {
          "userLat": 43.6447708,
          "userLng": -79.37330639999999,
          "searchRadius": 8000
        },
        "first": 20,
        "status": "OPEN"
      }
    },
    "query": "query GetRestaurants($input: RestaurantsInput) {\n  restaurants(input: $input) {\n    pageInfo {\n      hasNextPage\n      endCursor\n      __typename\n    }\n    totalCount\n    nodes {\n      ...RestaurantNodeFragment\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment RestaurantNodeFragment on RestaurantNode {\n  _id\n  storeId\n  isAvailable\n  posVendor\n  chaseMerchantId\n  cateringHours {\n    ...OperatingHoursFragment\n    ...OperatingHoursFragment\n    __typename\n  }\n  curbsideHours {\n    ...OperatingHoursFragment\n    __typename\n  }\n  cateringHours {\n    ...OperatingHoursFragment\n    __typename\n  }\n  timezone\n  deliveryHours {\n    ...OperatingHoursFragment\n    __typename\n  }\n  diningRoomHours {\n    ...OperatingHoursFragment\n    __typename\n  }\n  distanceInMiles\n  drinkStationType\n  driveThruHours {\n    ...OperatingHoursFragment\n    __typename\n  }\n  driveThruLaneType\n  email\n  environment\n  franchiseGroupId\n  franchiseGroupName\n  frontCounterClosed\n  hasBreakfast\n  hasBurgersForBreakfast\n  hasCatering\n  hasCurbside\n  hasDelivery\n  hasDineIn\n  hasDriveThru\n  hasTableService\n  hasMobileOrdering\n  hasLateNightMenu\n  hasParking\n  hasPlayground\n  hasTakeOut\n  hasWifi\n  hasLoyalty\n  id\n  isDarkKitchen\n  isFavorite\n  isHalal\n  isRecent\n  latitude\n  longitude\n  mobileOrderingStatus\n  name\n  number\n  parkingType\n  phoneNumber\n  physicalAddress {\n    address1\n    address2\n    city\n    country\n    postalCode\n    stateProvince\n    stateProvinceShort\n    __typename\n  }\n  playgroundType\n  pos {\n    vendor\n    __typename\n  }\n  posRestaurantId\n  restaurantImage {\n    asset {\n      _id\n      metadata {\n        lqip\n        palette {\n          dominant {\n            background\n            foreground\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    crop {\n      top\n      bottom\n      left\n      right\n      __typename\n    }\n    hotspot {\n      height\n      width\n      x\n      y\n      __typename\n    }\n    __typename\n  }\n  restaurantPosData {\n    _id\n    __typename\n  }\n  status\n  vatNumber\n  timezone\n  __typename\n}\n\nfragment OperatingHoursFragment on OperatingHours {\n  friClose\n  friOpen\n  monClose\n  monOpen\n  satClose\n  satOpen\n  sunClose\n  sunOpen\n  thrClose\n  thrOpen\n  tueClose\n  tueOpen\n  wedClose\n  wedOpen\n  __typename\n}\n"
  }
])
headers = {
  'authority': 'use1-prod-th.rbictg.com',
  'accept': '*/*',
  'accept-language': 'en-US,en;q=0.9,pl;q=0.8',
  'apollographql-client-name': 'wl-web',
  'apollographql-client-version': '537c25d',
  'content-type': 'application/json',
  'origin': 'https://www.timhortons.ca',
  'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"macOS"',
  'sec-fetch-dest': 'empty',
  'sec-fetch-mode': 'cors',
  'sec-fetch-site': 'cross-site',
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
  'x-forter-token': '95eea134f663408cb9e30f1280f73152_1701584742482__UDF43-m4_13ck_tt',
  'x-session-id': '096aca3f-31d0-4d42-930d-d3f1a73df675',
  'x-ui-language': 'en',
  'x-ui-platform': 'web',
  'x-ui-region': 'CA',
  'x-user-datetime': '2023-12-03T07:25:56+01:00'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.json())
