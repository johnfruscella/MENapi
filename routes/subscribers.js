const express = require('express');
const router = express.Router();

// Gettting all subsscribers
router.get('/', (req, res) => {
    res.send('Hello World');
});
// Getting One subsciber
router.get('/:id', (req, res) => {
    res.send(req.params.id);

});
// Creating a subscriber
router.post('/', (req, res) => {

});
// Updating a subscriber. using patch instead of put so a change only updates the specific info changed not whole thing
router.patch('/:id', (req, res) => {

});
// Deleting a subscriber
router.delete('/:id', (req, res) => {

});

module.exports = router;