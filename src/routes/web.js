const express = require('express');

const router = express.Router();

router.get('/sample', (req, res) => {
    res.render('sample.ejs')
  })
  
router.get('/abc', (req, res) => {
    res.render('hi')
  })

module.exports = router;