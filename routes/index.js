const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('front/index', { title: 'İlan Arıyor' });
});



module.exports = router;
