const config = require('../../../src/sequelize/config/index');


const db_credentials = {
  username: config.PRODUCTCATALOGUE_DATABASE_USERNAME,
    password: config.PRODUCTCATALOGUE_DATABASE_PASSWORD,
    database: config.PRODUCTCATALOGUE_DATABASE_NAME,
    host: config.PRODUCTCATALOGUE_DATABASE_HOST,
    dialect: config.PRODUCTCATALOGUE_DATABASE_DIALECT,
}


module.exports = {

  //the test, production and development env db credentials helps connect to the db when running migrations
  test: {
    username: config.PRODUCTCATALOGUE_DATABASE_NAME,
    password: config.PRODUCTCATALOGUE_DATABASE_PASSWORD,
    database: config.PRODUCTCATALOGUE_DATABASE_NAME,
    host: config.PRODUCTCATALOGUE_DATABASE_HOST,
    dialect: config.PRODUCTCATALOGUE_DATABASE_DIALECT,
  },

  production: {
    username: config.PRODUCTCATALOGUE_DATABASE_NAME,
    password: config.PRODUCTCATALOGUE_DATABASE_PASSWORD,
    database: config.PRODUCTCATALOGUE_DATABASE_NAME,
    host: config.PRODUCTCATALOGUE_DATABASE_HOST,
    dialect: config.PRODUCTCATALOGUE_DATABASE_DIALECT,
  },

  development: {
    username: config.PRODUCTCATALOGUE_DATABASE_USERNAME,
    password: config.PRODUCTCATALOGUE_DATABASE_PASSWORD,
    database: config.PRODUCTCATALOGUE_DATABASE_NAME,
    host: config.PRODUCTCATALOGUE_DATABASE_HOST,
    dialect: config.PRODUCTCATALOGUE_DATABASE_DIALECT,
  },

  db_credentials, //this helps connect to the db when running the whole application
  }


