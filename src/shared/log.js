'use strict'
const colors = require('colors');

let l = (method, str, color='white') => {
  if (!console || !console[method]) return;
  console[method](colors[color](`[tracker-app] ${str}`));
};

let log = (str) => l('log', str, 'yellow')
log.warn = (str) => l('warn', str, 'cyan')
log.error = (str) => l('error', str, 'red');

module.exports = log;
