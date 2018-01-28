const express = require('express'),
      app = express();

const mongoose = require('mongoose'),
      passport = require('passport'),
      flash = require('connect-flash'),
      morgan = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      session = require('express-session');

const { url } = require('./config/database');

mongoose.connect(url, {});

// require('./config/passport')(passport);

// settings
app
  .set('port', process.env.PORT || 3000)
  .set('views', `${__dirname}/views`)
  .set('view engine', 'pug');

// middlewares
app
  .use(morgan('dev'))
  .use(cookieParser())
  .use(bodyParser.urlencoded({extended: true}))
  .use(session({
    secret: 'appunmsm',
    resave: false,
    saveUninitialized: false
  }))
  .use(passport.initialize())
  .use(passport.session())
  .use(flash());

// routes
require('./app/routes')(app, passport);

// static files
app.use(express.static(`${__dirname}/public`));

// prendiendo server
app.listen(app.get('port'), () => {
  console.log(`Started up at port ${app.get('port')}`);
});
