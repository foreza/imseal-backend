var db = require("../models/index") // Get the reference for sequelize
const sessionRepository = {};


/*

INSERT into "Sessions" ("device_id", "isActive", "cellular", "os", "placement_id", "request_ip", "continent", "country", "region", "city", "lat", "long", "createdAt" ) 
VALUES ( '123456789', true, false, 'Android', '380000', '45.51.123.12', 'North America', 'United States', 'California', 'Santa Monica', 0, 0, '2020-05-04 18:03:24.589 -07:00')
RETURNING id;


*/

const insertSessionForSessionIdQuery = `INSERT into "Sessions" ("device_id", "isActive", "cellular", "os", "placement_id", "request_ip", "continent", "country", "region", "city", "lat", "long", "createdAt" ) 
VALUES ( :device_id, :isActive, :cellular, :os, :placement_id, :request_ip, :continent, :country, :region, :city, :lat, :long, :createdAt)
RETURNING id`

sessionRepository.insertSessionForSessionId = async (body) => {
    const sessionId = await db.sequelize.query(insertSessionForSessionIdQuery, {
        type: db.sequelize.QueryTypes.INSERT,
        replacements: { ...body, createdAt: new Date() }
    })
    return sessionId;
}

module.exports = sessionRepository;        // Export this so we can access this repository unit