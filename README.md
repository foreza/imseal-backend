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
    'device_id': 'XXX-XXX-XXXXX',  
    'isActive': true,
    'cellular': false,
    'OS': 'Android',
    `placement_id' : '380000',
    'request_ip': '45.51.123.12',
    'continent': 'North America',
    'country': 'United States,
    'region': 'California',
    'city': 'Santa Monica',
    'lat': 0.0,
    'long': -0.0,
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

----

## EVENT API

----

### POST: `/event`

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

### POST: `/event/nofill/`

**Sample Request Body:**

```json
{
    'event_id': 4526,
    'timestamp': new Date(),
    'reason': 'no fill'
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

### POST: `/event/error/`

**Sample Request Body:**

```json
{
    'event_id': 4526,
    'timestamp': new Date(),
    'error_string': 'some error'
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

### POST: `/event/load/`

**Sample Request Body:**

```json
{
    'event_id': 4526,
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

### GET `/events/:sessionId/`

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


### [wip] GET: /event/:event_id

WIPProvide Event ID as path.

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
