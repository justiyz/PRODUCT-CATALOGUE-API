// require('dotenv').config();
require('dotenv').config({path: __dirname + '/./../../../../.env'});

const {
  PRODUCTCATALOGUE_NODE_ENV,
  PRODUCTCATALOGUE_TEST_PORT,

  PRODUCTCATALOGUE_TEST_DATABASE_USERNAME,
  PRODUCTCATALOGUE_TEST_DATABASE_PASSWORD,
  PRODUCTCATALOGUE_TEST_DATABASE_NAME,
  PRODUCTCATALOGUE_TEST_DATABASE_HOST,
  PRODUCTCATALOGUE_TEST_DATABASE_URL,
  PRODUCTCATALOGUE_TEST_DATABASE_DIALECT,
  
} = process.env;


module.exports = {
  PRODUCTCATALOGUE_NODE_ENV,
  PRODUCTCATALOGUE_PORT: PRODUCTCATALOGUE_TEST_PORT,

  PRODUCTCATALOGUE_DATABASE_USERNAME: PRODUCTCATALOGUE_TEST_DATABASE_USERNAME,
  PRODUCTCATALOGUE_DATABASE_PASSWORD: PRODUCTCATALOGUE_TEST_DATABASE_PASSWORD,
  PRODUCTCATALOGUE_DATABASE_NAME: PRODUCTCATALOGUE_TEST_DATABASE_NAME,
  PRODUCTCATALOGUE_DATABASE_HOST: PRODUCTCATALOGUE_TEST_DATABASE_HOST,
  PRODUCTCATALOGUE_DATABASE_URL: PRODUCTCATALOGUE_TEST_DATABASE_URL,
  PRODUCTCATALOGUE_DATABASE_DIALECT: PRODUCTCATALOGUE_TEST_DATABASE_DIALECT,
  
  
};