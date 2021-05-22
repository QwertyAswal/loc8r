const express = require('express');
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
const router = express.Router();


// Locations Route
router.get('/', ctrlLocations.homeList);
router.get('/location/:locationid', ctrlLocations.locationInfo);
router.get('/location/:locationid/review/new', ctrlLocations.addReview);
router.post('/location/:locationid/review/new', ctrlLocations.doAddReview);

// Others
router.get('/about', ctrlOthers.about);

module.exports = router;
