var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var noticia = require("./controllers/NoticiaController");                        
var usuarios = require('./controllers/UsuarioController');

// Conexion BD
mongoose.connect('mongodb+srv://diego:BXAY2J7EYqOf3SX8@cluster.vywmd.mongodb.net/practicaNoticias', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(db => console.log('db is connected'))
    .catch(err => console.log(err));

    //

    // Configuracion de passport
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var expressSession = require('express-session');
app.use(expressSession({
  secret: 'claveSecreta',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

var Account = require('./models/account');
passport.use(new localStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());
// * passport


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', usuarios);
app.use('/noticia', noticia);                                                 

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
