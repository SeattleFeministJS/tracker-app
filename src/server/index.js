'use strict';

const config = require('../../config/')
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const apiRouter = require('./api/')

let app = express()

if(config.env === 'development') {
  // Webpack hot middleware for development
  const webpack = require('webpack')
  const webpackConfig = require('../../webpack.dev.config')
  let compiler = webpack(webpackConfig)
  app.use(require('webpack-dev-middleware')(compiler, compiler.devServer))
  app.use(require('webpack-hot-middleware')(compiler))
}

// turn off the powered by express header
app.set('x-powered-by', false);

// morgan is http logger
app.use(morgan('combined'))

// express.static will serve /dist as a static resource
// /dist is where Webpack will bundle our react app
// index.html will be served on a GET to /
app.use(express.static('dist'))
app.use('/assets', express.static('assets'))

// body parser makes it possible to post JSON to the server
// we can accss data we post on as req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// route all request to /api to api routes
app.use('/api', apiRouter)

module.exports = app
