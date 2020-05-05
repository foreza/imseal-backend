var express = require('express')
const router = express.Router();
var sessionRepository = require('../repository/sessionUnit');

router.post('/', async (req, res, next) => {
    console.log(`request body is ${req.body}`);
    const sessionId = await sessionRepository.insertSessionForSessionId(req.body);
    console.log(`session id: ${sessionId}`);
    res.json(sessionId[0][0]);
})

module.exports = router;