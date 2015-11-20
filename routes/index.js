var express = require('express');
var Notifications = require('chrome-notifications');
var router = express.Router();

/* GET home page. */
router.get('/notify/:token', function(req, res, next) {
  var token = req.params.token;
  var notifications = new Notifications('AIzaSyCIfegICIxcMKt1kZ69bz_kK8kicEOGBtU');
  notifications.notify(token);
  res.render('index', { title: 'Express' });
});

module.exports = router;
