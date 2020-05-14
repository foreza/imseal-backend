var express = require('express')
const router = express.Router();
var sessionRepository = require('../repository/sessionUnit');

const sessionLimit = 50;        // TODO: Move this somewhere more graceful

router.post('/', async (req, res, next) => {
    console.log(`request body is ${req.body}`);
    const sessionId = await sessionRepository.insertSessionForSessionId(req.body);
    console.log(`session id: ${sessionId}`);
    res.json(sessionId);
})


router.get('/', async (req, res, next) => {
    const sessions = await sessionRepository.retrieveSessionListWithLimit(sessionLimit);
    res.json(sessions);
})

router.get('/:sessionId', async (req, res, next) => {

    // TODO: validation for session id

    const session = await sessionRepository.retrieveSessionForSessionID(req.params.sessionId);
    res.json(session);
})

module.exports = router;