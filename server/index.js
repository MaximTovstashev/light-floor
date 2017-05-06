const Brest = require('brest');
const settings = require('./settings');
const brest = new Brest(settings);

require('./db');

brest.on('ready',()=>{});