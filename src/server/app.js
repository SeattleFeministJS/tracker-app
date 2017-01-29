'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')

let app = express()

// turn off the powered by express header
app.set('x-powered-by', false);

// Configure middleware
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: false }));

// express.static will serve everything
// within /app as a static resource /app
// is where Webpack will bundle our react app
// it will serve index.html on a GET to /
app.use(express.static('app'))


module.exports = app
