const db = require('../models/index')
const eventRepository = {};

const insertNewEventForSessionIdQuery = 
`INSERT into "AdRequestEvents" (type, timestamp, session_id)
VALUES ( :type, :timestamp, :session_id)
RETURNING event_id;`

eventRepository.insertNewEventForSessionId = async(body) => {
    const event_id = await db.sequelize.query(insertNewEventForSessionIdQuery, {
        type: db.sequelize.QueryTypes.INSERT,
        replacements: { ...body}
    })

    return event_id;
}


module.exports = eventRepository;

// npx sequelize-cli model:generate --name AdRequestEvent --attributes type:integer,timestamp:date,sessionId:number
// npx sequelize-cli model:generate --name AdLoadEvent --attributes type:integer,timestamp:date,eventId: number
// npx sequelize-cli model:generate --name AdNoFillEvent --attributes type:integer,timestamp:date,eventId: number

// For later
// npx sequelize-cli model:generate --name AdErrorEvent --attributes type:integer,timestamp:date,eventId: number
// npx sequelize-cli model:generate --name AdImpressionEvent --attributes type:integer,timestamp:date,eventId: number