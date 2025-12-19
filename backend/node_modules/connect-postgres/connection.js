const platform = require('connect-platform');
const { Pool } = require('pg')

let options = platform.config.get('postgres', {});

const pgPool = new Pool(options);

module.exports = pgPool