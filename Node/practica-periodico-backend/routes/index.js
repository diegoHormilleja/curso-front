var express = require('express');
var router = express.Router();

var passport = require('passport');
var Account = require('../models/account');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', function(req, res) {
  Account.register(new Account({username: req.body.username}), req.body.password, function(err, account){
    if(err){
      console.log(err);
      return res.render('register', {account:account});
    }
    passport.authenticate('local')(req, res, function(){
      res.redirect('/');
    });
  });
});

router.post('/login',passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});




module.exports = router;
