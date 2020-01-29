const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');

// Gettting all subsscribers
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});
// Getting One subsciber
router.get('/:id', getSubscriber, (req, res) => {
    res.send(res.subscriber.name);

});
// Creating a subscriber
router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })
    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});
// Updating a subscriber. using patch instead of put so a change only updates the specific info changed not whole thing
router.patch('/:id',getSubscriber, (req, res) => {

});
// Deleting a subscriber
router.delete('/:id',getSubscriber, (req, res) => {

});

async function getSubscriber(req, res, next) {
    let subscriber;
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber === null) {
            return res.status(404).json({ message: `Cannont find subscriber` })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.subscriber = subscriber;
    next();
}

module.exports = router;