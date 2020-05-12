# imseal-backend
Backend API for the IMSEAL service

## Run Development environment

### Create PostGres db

Remember to update `config.json` with the appropriate postgres user/password credentials.
If you don't have a config, initialize with: `sequelize init`

### Run commands

```bash
npm install
npm run dev-migration-down
npm run dev-migration-up
npm start
```

*If you want to use some initial seed data for sample users/pens:*

```bash
npm run dev-seed-down
npm run dev-seed-up
```

## Project Requirements

* PostGres (recommended: v12+)
* Node.js (recommended: v12.14.+)

## SESSION API

----

### POST: `/session`

**Sample Request Body:**

```json
{
    device_id': 'XXX-XXX-XXXXX',  
    'isActive': true,
    'cellular': false,
    'os': 'Android',
    'placement_id' : '380000',
    'request_ip': '45.51.123.12',
    'continent': 'North America',
    'country': 'United States',
    'region': 'California',
    'city': 'Santa Monica',
    'lat': 0.0,
    'long': -0.0
}
```

**Success:**

Response: `201 Created`

Body:

```json
{
    'session_id' : 123
}
```

**Fail:**

Response: `404 Not Found`

### GET: `/session/:id`

Example GET: /session/123

**Sample Request Body:**

```json
{}
```

**Success:**

Response: `201 Created`

Body:

```json
{
    id: 123,
    device_id': 'XXX-XXX-XXXXX',  
    'isActive': true,
    'cellular': false,
    'os': 'Android',
    'placement_id' : '380000',
    'request_ip': '45.51.123.12',
    'continent': 'North America',
    'country': 'United States',
    'region': 'California',
    'city': 'Santa Monica',
    'lat': 0.0,
    'long': -0.0
}
```

**Fail:**

Response: `404 Not Found`

### GET: `/session`

Get sessions. Limited to the most recent **50** sessions.

**Sample Request Body:**

```json
{}
```

**Success:**

Response: `200 Success`

Body:

```json
[
    {
        device_id': 'XXX-XXX-XXXXX',  
        'isActive': true,
        'cellular': true,
        'os': 'Android',
        'placement_id' : '123',
        'request_ip': '45.51.123.12',
        'continent': 'North America',
        'country': 'United States',
        'region': 'California',
        'city': 'Santa Monica',
        'lat': 0.0,
        'long': -0.0
    },
    {
        device_id': 'XXX-XXX-XXXXX',  
        'isActive': true,
        'cellular': false,
        'os': 'iOS',
        'placement_id' : '456',
        'request_ip': '45.51.123.12',
        'continent': 'North America',
        'country': 'United States',
        'region': 'California',
        'city': 'Santa Monica',
        'lat': 0.0,
        'long': -0.0
    },
    {
        device_id': 'XXX-XXX-XXXXX',  
        'isActive': true,
        'cellular': false,
        'os': 'Android',
        'placement_id' : '789',
        'request_ip': '45.51.123.12',
        'continent': 'North America',
        'country': 'United States',
        'region': 'California',
        'city': 'Santa Rosa',
        'lat': 0.0,
        'long': -0.0
    }
]
```

**Fail:**

Response: `404 Not Found`

----

## EVENT API

----

### POST: `/event`

This route will create a new event and return an event ID to be used for the remainder of the ad request lifecycle.
All other events (fill, no fill, error, impression, etc) will utilize the event ID provided.

**Sample Request Body:**

```json
{
    'session_id': 865,
    'timestamp': new Date()
}
```

**Success:**

Response: `201 Created`

Body:

```json
{
    'event_id': 4526
}
```

**Fail:**

Response: `404 Not Found`

### POST: `/event/:event_id`

This route will create a specified event provided a type and some optional data.
This will work in conjunction with the prior event (for POST /event) by utilizing the returned event ID.
Once a new POST to /event is called, the old event id should be discarded and the new event ID should be utilized.

**Sample Request Body:**

Example URL: /event/

```json
{
    'type': 1,
    'timestamp': new Date(),
}
```

```json
{
    'type': 2,
    'timestamp': new Date(),
    'reason_string': 'some reason for no fill',
}
```

```json
{
    'type': 3,
    'timestamp': new Date(),
    'error_string': 'some error'
}
```

```json
{
    'type': 4,
    'timestamp': new Date(),
    'imp_string': 'some info about impression if available'
}
```

Type descriptions:

| Enum | Event      | Description                              |
|------|------------|------------------------------------------|
| 0    | Request    | Ad Request made. New event ID generated. |
| 1    | Fill       | Ad Request filled.                       |
| 2    | No Fill    | Ad Request did not fill.                 |
| 3    | Error      | Error with Ad Request.                   |
| 4    | Impression | Received Ad Impression.                  |

For the `info` field, depends on client side implementation.


**Success:**

Response: `201 Created`

Body:

```json
{ }
```

**Fail:**

Response: `404 Not Found`



### GET `/events/session/:sessionId/`

Gets all specific events based off of the session ID provided.  
Takes in additional args (v2) to only retrieve specific events.  
For now, will only return the `start`, `no_fill` and `load` events.

**Request**: N/A

**Success:**

Response: `200 OK`

Body:

```json
[
    {
        'event_id': 123
        'time_start': "5:55"
        'time_nofill': null
        'time_load': "5:57"
    },
    {
        'event_id': 124
        'time_start': "6:55"
        'time_nofill': null
        'time_load': "5:57"
    },
    {
        'event_id': 125
        'time_start': "7:55"
        'time_nofill': null
        'time_load': "5:57"
    }
]
```

**Fail:** `404 Not Found`


### GET: /event/:event_id

Provide Event ID as path.

Sample Request: GET /event/1823781

**Sample Request Body:** `N/A`

Response:
``` json
{ 
event_id: 
Time_start: 
ime_Err: 
time_imp: 
time_nofill: 
time_fill: 
} 
```

Response: 200 OK or 404 Not Found 
 

### [wip] POST: /event/imp/  

Request JSON: 
```json
{ 
event_id: XXXXX 
timestamp: new Date() 
} 
```

Response: 201 created or 404 Not Found 
