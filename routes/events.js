const express = include('express');
const router = express.Router;
const eventRepository = require('../repository/eventUnit');


router.post('/', async (req, res, next) => {

    const event_id = eventRepository // TODO: do something
    console.log(`returned event_id: ${event_id}` )
    res.json(event_id);
})



router.post('/:event_id', async (req, res, next) => {

    const event_id = req.params.event_id;
    const event_enum_type = req.body.type;

    switch (event_enum_type) {
        case 0:
            // nobody should be doing this
        case 1: // Handle Fill
            await eventRepository
            break;
        case 2: // Handle No Fill
            await eventRepository
            break;
        case 3: // Handle Error
            await eventRepository
            break;
        case 4: // Handle Impression
            await eventRepository
            break;
        default:
            break;

    }

    const event_id = eventRepository // TODO: do something

    console.log(`returned event_id: ${event_id}` )
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
