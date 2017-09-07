const express = require('express');
const router = express.Router();
const models = require("./models");

// Show a list of all activities I am tracking, and links to their individual pages
router.get('/activities', (req, res) => {

});

// Create a new activity for me to track.
router.post('/activities', (req, res) => {

});

// Show information about one activity I am tracking, and give me the data I have recorded for that activity.
router.get('/activities/{id}', (req, res) => {

});

// Update one activity I am tracking, changing attributes such as name or type. Does not allow for changing tracked data.
router.put('/activities/{id}', (req, res) => {

});

// Delete one activity I am tracking. This should remove tracked data for that activity as well.
router.delete('/activities/{id}', (req, res) => {

});

// Add tracked data for a day. The data sent with this should include the day tracked. You can also override the data for a day already recorded.
router.post('/activities/{id}/stats', (req, res) => {

});

// Remove tracked data for a day.
router.post('/stats,{id}', (req, res) => {

});

module.exports = router;
