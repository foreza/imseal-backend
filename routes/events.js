const express = require('express')
const router = express.Router();
const eventRepository = require('../repository/eventUnit');


router.post('/', async (req, res, next) => {

    // TODO: sanitize / perform initial validation on body
    console.log(`received event req: ${req.body}`)
    const event_id = (await eventRepository.insertNewEventForSessionId(req.body))[0][0];
    console.log(`returned event_id: ${event_id}` )
    res.json(event_id);
})



router.post('/:event_id', async (req, res, next) => {

    const event_id = req.params.event_id;
    const event_enum_type = req.body.type;

    console.log(`received event req: ${req.body}`)

    // TODO: Add error handling within the switch statements
    switch (event_enum_type) {
        case 1: // Handle Fill
            console.log(`handle fill`)
            await eventRepository.insertNewAdLoadEventForEventId(req.body, event_id);
            break;
        case 2: // Handle No Fill
            console.log(`handle no fill`)
            await eventRepository.insertNewAdNoFillEventForEventId(req.body, event_id);
            break;
        case 3: // Handle Error
            console.log(`handle error (wip)`)
            // await eventRepository
            break;
        case 4: // Handle Impression
            console.log(`handle impression (wip)`)
            // await eventRepository
            break;
        default:
            console.log(`default case`)
            break;
    }

    res.sendStatus(200);
})


// TODO: Gets a specific event based off of the session ID provided.  
router.get('/:event_id', async (req, res, next) => {

    const event_id = req.params.event_id;

    // const data = await eventRepository // do something

    if (data.length > 0){
        res.json(data);
    }
    
})


// Gets all specific events based off of the session ID provided.  
router.get('/session/:session_id', async (req, res, next) => {

    const session_id = req.params.session_id;

    // const data = await eventRepository // do something

    if (data.length > 0){
        res.json(data);
    }
    
})


module.exports = router;
