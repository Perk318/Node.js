require('dotenv').config()

const config = {
    db: {
      host: "127.0.01",
      user: "root", //process.env.USERNAME1,
      password: "", //process.env.PASSWORD,
      database: "rocket_development",//process.env.DATABASE,
      port: "3306"
    },
  };






module.exports = config;
