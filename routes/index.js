var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET test page. */
router.get('/test', function(req, res) {
  res.render('test', { title: 'Test page to test routes' });
});

router.get('/userlist', function(req,res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{}, function(e,docs){
    res.render('userlist',{
      "userlist" : docs
    });
  });
});

module.exports = router;
