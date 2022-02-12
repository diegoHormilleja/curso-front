var express = require('express');
var router = express.Router();
var passport = require('passport');
var Account = require('../models/Account');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Ir a la pagina de login
router.get('/login', function(req, res, next) {
  res.render('login', { user: req.user });
});

// Procesar los datos del formulario de login
router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});


// Ir a la pagina de register
router.get('/register', function(req, res) {
  res.render('register', { user: req.user });
});


// Procesar los datos de registro
router.post('/register', function(req, res) {
  Account.register(new Account({username: req.body.username }), req.body.password, function(err, account){
    if (err){
      console.log(err);
      return res.render('register', {account: account});
    } 

    passport.authenticate('local')(req, res, function(){
      res.redirect('/');
    })
  });
});


module.exports = router;
