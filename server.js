
// const express = require('express');

// const {sequelize} = require('./src/sequelize/models');
// const config = require('./src/sequelize/config/index');
// const logger = require('./src/logger/logger');
// const enums = require('./src/user/lib/enums');

// const app = express();



// app.use(express.json());



// //db
// const connectDB = async () => {
//     logger.info('Checking database connection...');
//     try {
//         await sequelize.authenticate();
//         logger.info('Database connection established');
//     } catch (e) {
//         logger.info('Database connection failed', e);
//         process.exit(1);
//     }
// };




// // Routes Entry Point
// const routes = require('./src/user/routes');
// app.use('/', routes);
  





// // Error Handling Middleware
// app.use((err, req, res, next) => {
//     const statusCode = err.statusCode || 500;
//     const message = err.message || 'Internal Server Error';
//     console.error(`${enums.CURRENT_TIME_STAMP}, [ERROR]: ${message}`); // Logs the error for debugging
//     return res.status(statusCode).json({
//       status: 'error',
//       message,
//       code: statusCode,
//     });
//   });
  




// // Port
// const PORT = config.PRODUCTCATALOGUE_PORT || 4000;

// // Wrap the code in an async function
// const startServer = async () => {

// // Connect to the database
// await connectDB(); 

//   logger.info(`Attempting to run server on port ${ PORT }`);
//   logger.info(`Now running on ${ config.PRODUCTCATALOGUE_NODE_ENV } environment`);

//   // Server
//   app.listen(PORT, () => {
//     logger.info(`App listening on port ${ PORT }`)
//   });
// };





// // Call the async function to start the server
// startServer();

// module.exports = app;






// server.js
// const { app, sequelize } = require('./app');
const { app, sequelize } = require('./src/app');
const config = require('./src/sequelize/config/index');
const logger = require('./src/logger/logger');

const PORT = config.PRODUCTCATALOGUE_PORT || 4000;

const connectDB = async () => {
  logger.info('Checking database connection...');
  try {
    await sequelize.authenticate();
    logger.info('Database connection established');
  } catch (e) {
    logger.info('Database connection failed', e);
    process.exit(1);
  }
};

const startServer = async () => {
  await connectDB();
  logger.info(`Attempting to run server on port ${PORT}`);
  logger.info(`Now running on ${config.PRODUCTCATALOGUE_NODE_ENV} environment`);
  app.listen(PORT, () => {
    logger.info(`App listening on port ${PORT}`);
  });
};

startServer();
