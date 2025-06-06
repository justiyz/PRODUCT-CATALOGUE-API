// require('dotenv').config();
require('dotenv').config({path: __dirname + '/./../../../../.env'});


const {

  PRODUCTCATALOGUE_NODE_ENV,
  PRODUCTCATALOGUE_DEV_PORT,

  PRODUCTCATALOGUE_DEV_DATABASE_USERNAME,
  PRODUCTCATALOGUE_DEV_DATABASE_PASSWORD,
  PRODUCTCATALOGUE_DEV_DATABASE_NAME,
  PRODUCTCATALOGUE_DEV_DATABASE_HOST,
  PRODUCTCATALOGUE_DEV_DATABASE_URL,
  PRODUCTCATALOGUE_DEV_DATABASE_DIALECT,
  

} = process.env;


module.exports = {
  PRODUCTCATALOGUE_NODE_ENV,
  PRODUCTCATALOGUE_PORT: PRODUCTCATALOGUE_DEV_PORT,

  PRODUCTCATALOGUE_DATABASE_USERNAME: PRODUCTCATALOGUE_DEV_DATABASE_USERNAME,
  PRODUCTCATALOGUE_DATABASE_PASSWORD: PRODUCTCATALOGUE_DEV_DATABASE_PASSWORD,
  PRODUCTCATALOGUE_DATABASE_NAME: PRODUCTCATALOGUE_DEV_DATABASE_NAME,
  PRODUCTCATALOGUE_DATABASE_HOST: PRODUCTCATALOGUE_DEV_DATABASE_HOST,
  PRODUCTCATALOGUE_DATABASE_URL: PRODUCTCATALOGUE_DEV_DATABASE_URL,
  PRODUCTCATALOGUE_DATABASE_DIALECT: PRODUCTCATALOGUE_DEV_DATABASE_DIALECT,
  
  

};