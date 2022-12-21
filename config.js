require('dotenv').config()

const config = {
    db: {
      host: "localhost",
      user: "root", //process.env.USERNAME1,
      password:"", //process.env.PASSWORD,
      database: "myapp_development"//process.env.DATABASE,
    },
  };
  module.exports = config;