const env       = process.env.ENV || 'packed';
const config    = require('../knexfile');
const knex      = require('knex')(config[env]);

module.exports = knex;