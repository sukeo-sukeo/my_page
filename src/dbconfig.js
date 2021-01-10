require('dotenv').config();
const hostname = require('os').hostname();

const DBoption = () => {
  if (hostname.split('.')[1] === 'local') {
    return {
      host: process.env.DEV_HOST,
      user: process.env.DEV_USER,
      password: process.env.DEV_PASSWORD,
      database: process.env.DEV_DATABASE,
    };
  } else {
    return {
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    };
  }
};

const opt = DBoption()

module.exports = opt