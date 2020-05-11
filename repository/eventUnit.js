const db = require('..models/index')
const eventRepository = {};

const insertNewEventForSessionIdQuery = 
`INSERT into "Events" ... `

eventRepository.insertNewEventForSessionId = async(body) => {
    const event_id = await db.sequelize.query(insertNewEventForSessionIdQuery, {
        type: db.sequelize.QueryTypes.INSERT,
        replacements: { ...body}
    })
    return event_id;
}




module.exports = eventRepository;