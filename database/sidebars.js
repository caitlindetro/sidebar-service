const pg = require('pg');

const connection = 'postgres://localhost:5432/caitlindetro';
module.exports.db = new pg.Client(connection);
