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


module.exports = app
