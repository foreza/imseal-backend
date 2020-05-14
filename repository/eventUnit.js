const db = require('../models/index')
const eventRepository = {};

const insertNewEventForSessionIdQuery = 
`INSERT into "AdRequestEvents" (timestamp, session_id)
VALUES (:timestamp, :session_id)
RETURNING event_id;`

eventRepository.insertNewEventForSessionId = async(body) => {
    const event_id = await db.sequelize.query(insertNewEventForSessionIdQuery, {
        type: db.sequelize.QueryTypes.INSERT,
        replacements: { ...body}
    })
    return event_id;
}


const insertNewAdLoadEventForEventIdQuery = 
`INSERT into "AdLoadEvents" (type, timestamp, event_id)
VALUES ( :type, :timestamp, :event_id);`

eventRepository.insertNewAdLoadEventForEventId = async(body, event_id) => {
    await db.sequelize.query(insertNewAdLoadEventForEventIdQuery, {
        type: db.sequelize.QueryTypes.INSERT,
        replacements: { ...body, event_id: event_id}
    })
}


const insertNewAdNoFillEventForEventIdQuery = 
`INSERT into "AdNoFillEvents" (type, timestamp, event_id)
VALUES ( :type, :timestamp, :event_id);`

eventRepository.insertNewAdNoFillEventForEventId = async(body, event_id) => {
    await db.sequelize.query(insertNewAdNoFillEventForEventIdQuery, {
        type: db.sequelize.QueryTypes.INSERT,
        replacements: { ...body, event_id: event_id}
    })
}


const retrieveAllEventsForSessionIdQuery =
`
SELECT 
"AdRequestEvents".session_id as session_id,
"AdRequestEvents".event_id as request_event_id,
"AdLoadEvents".id as load_event_id,
"AdNoFillEvents".id as nofill_event_id,
"AdRequestEvents"."timestamp"  as ad_request_ts,
"AdLoadEvents"."timestamp"  as ad_loaded_ts,
"AdNoFillEvents"."timestamp"  as ad_nofill_ts
from "AdRequestEvents"
left outer join "AdLoadEvents" on "AdRequestEvents".event_id = "AdLoadEvents".event_id
left outer join "AdNoFillEvents" on "AdRequestEvents".event_id = "AdNoFillEvents".event_id
where session_id = :sessionId
order by ad_request_ts asc;
`

eventRepository.retrieveAllEventsForSessionId = async (sessionId ) => {
    const eventList = await db.sequelize.query(retrieveAllEventsForSessionIdQuery, {
        type: db.sequelize.QueryTypes.SELECT,
        replacements: { sessionId: sessionId}
    })

    return eventList;
}


module.exports = eventRepository;

// npx sequelize-cli model:generate --name AdRequestEvent --attributes type:integer,timestamp:date,sessionId:number
// npx sequelize-cli model:generate --name AdLoadEvent --attributes type:integer,timestamp:date,eventId: number
// npx sequelize-cli model:generate --name AdNoFillEvent --attributes type:integer,timestamp:date,eventId: number

// For later
// npx sequelize-cli model:generate --name AdErrorEvent --attributes type:integer,timestamp:date,eventId: number
// npx sequelize-cli model:generate --name AdImpressionEvent --attributes type:integer,timestamp:date,eventId: number