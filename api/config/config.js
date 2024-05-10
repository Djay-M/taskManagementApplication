const { env } = require("./vars");

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASENAME,
    host: process.env.DB_URL,
    dialect: "postgres",
    logging: false,
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASENAME,
    host: process.env.DB_URL,
    dialect: "postgres",
    logging: false,
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASENAME,
    host: process.env.DB_URL,
    dialect: "postgres",
    logging: false,
  },
};
