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


module.exports = eventRepository;

// npx sequelize-cli model:generate --name AdRequestEvent --attributes type:integer,timestamp:date,sessionId:number
// npx sequelize-cli model:generate --name AdLoadEvent --attributes type:integer,timestamp:date,eventId: number
// npx sequelize-cli model:generate --name AdNoFillEvent --attributes type:integer,timestamp:date,eventId: number

// For later
// npx sequelize-cli model:generate --name AdErrorEvent --attributes type:integer,timestamp:date,eventId: number
// npx sequelize-cli model:generate --name AdImpressionEvent --attributes type:integer,timestamp:date,eventId: number