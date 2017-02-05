'use strict'
const colors = require('colors');

let l = (method, str, color='white') => {
  if (!console || !console[method]) return;
  console[method](colors[color](`[tracker-app] ${str}`));
};

let log = (str) => l('log', str, 'green')
log.warn = (str) => l('warn', str, 'yellow')
log.error = (str) => l('error', str, 'red');

module.exports = log;
