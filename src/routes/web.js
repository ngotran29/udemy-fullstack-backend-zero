const express = require('express');
const {getHomepage, renderSample} = require('../controllers/homeController');
const router = express.Router();

//router.method('/route', handler)
router.get('/sample', renderSample);
router.get('/abc', getHomepage);

module.exports = router;