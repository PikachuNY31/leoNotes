// create a new pool using the connection string
const { Pool } = require('pg');
require('dotenv').config();

// be sure to remove postgres link and replace with appropriate env variable
const PG_URI = process.env.PG_URI;
// 'postgres://ceobertv:sZK70HZSR0WkwOPQm74ZYf7kcBteswYe@batyr.db.elephantsql.com/ceobertv';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
