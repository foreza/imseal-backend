var db = require('../models/index') // Get the reference for sequelize
const sessionRepository = {};


/*

INSERT into "Sessions: ('device_id', 'isActive', 'cellular', 'os', 'placement_id', 'request_ip', 'continent', 'country', 'region', 'city', 'lat', 'long', 'createdAt' ) 
VALUES ( <values here>)
RETURNING *  

*/

const insertSessionForSessionIdQuery = `INSERT into "Sessions: ('device_id', 'isActive', 'cellular', 'os', 'placement_id', 'request_ip', 'continent', 'country', 'region', 'city', 'lat', 'long', 'createdAt' ) 
VALUES ( :device_id, :isActive, :cellular, :os, :placement_id, :request_ip, :continent, :country, :region, :city, :lat, :long, :createdAt)
RETURNING *`

sessionRepository.insertSessionForSessionId = async (body) => {
    const session = await db.sequelize.query(insertSessionForSessionIdQuery, {
        type: db.sequelize.QueryTypes.INSERT,
        replacements: { ...body}
    })

    return session.id;
}

module.exports = sessionRepository;        // Export this so we can access this repository unit