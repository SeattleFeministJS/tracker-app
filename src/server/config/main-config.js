(function(appConfig) {

  'use strict';

  // *** main dependencies *** //
  const path = require('path');
  const cookieParser = require('cookie-parser');
  const bodyParser = require('body-parser');
  const session = require('express-session');
  // const flash = require('connect-flash');
  const morgan = require('morgan');
  const passport = require('passport');

  // *** load environment variables *** //
  require('dotenv').config();

  appConfig.init = function(app, express) {


    // *** app middleware *** //
    if (process.env.NODE_ENV === 'development') {
      // Webpack hot middleware for development
      const webpack = require('webpack')
      const webpackConfig = require('../../../webpack.dev.config')
      let compiler = webpack(webpackConfig)
      app.use(require('webpack-dev-middleware')(compiler, compiler.devServer))
      app.use(require('webpack-hot-middleware')(compiler))
    }

    if (process.env.NODE_ENV !== 'test') {
      app.use(morgan('dev'));
    }
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    // // uncomment if using express-session
    app.use(session({
      secret: process.env.SECRET_KEY,
      resave: false,
      saveUninitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    // app.use(flash());
    // express.static will serve /dist as a static resource
    // /dist is where Webpack will bundle our react app
    // index.html will be served on a GET to /
    app.use(express.static('dist'))
    app.use('/assets', express.static('assets'))
  };

})(module.exports);
