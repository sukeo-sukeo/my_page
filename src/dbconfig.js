require('dotenv').config();

const opt = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
};

module.exports = opt