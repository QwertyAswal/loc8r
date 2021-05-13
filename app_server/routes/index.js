const express = require('express');
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
const router = express.Router();


// Locations Route
router.get('/', ctrlLocations.homeList);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

// Others
router.get('/about', ctrlOthers.about);

module.exports = router;
