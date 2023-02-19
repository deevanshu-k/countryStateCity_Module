# xcountry-state-city

## Installation
```
npm i xcountry-state-city
```

## Example
```
let xcountry = require('xcountry-state-city');

xcountry.getAllCountries();
```

## Countries
#### getAllCountries()
```
xcountry.getAllCountries();
// it will return array of countries object
```

##### Response :
```
[
    {
        "id":101,
        "name":"India",
        "iso2":"IN",
        "iso3":"IND",
        "phone_code":"91",
        "capital":"New Delhi",
        "region":"Asia"
    },
    ...many more
]
```

### States
#### getStatesByCountry()
```
xcountry.getStatesByCountry( countryCode:'IND' );
// it will return array of states
```

##### Response :
```
[
    {
        "id": 4023,
        "name": "Andaman and Nicobar Islands",
        "state_code": "AN"
    },
    ...many more
]
```