const config = require('../knexfile.js')
const knex = require('knex')(config)

// knex.migrate.latest([config])  // --> not recommended, because you can loose the control about the migrations 
module.exports = knex