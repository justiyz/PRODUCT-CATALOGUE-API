// src/app.js or app.js

const express = require('express');
const { sequelize } = require('../src/sequelize/models');
const logger = require('../src/logger/logger');
const enums = require('../src/user/lib/enums');
const config = require('../src/sequelize/config/index');

const app = express();
app.use(express.json());

// Routes
const routes = require('../src/user/routes');
app.use('/', routes);

// Error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  console.error(`${enums.CURRENT_TIME_STAMP}, [ERROR]: ${message}`);
  return res.status(statusCode).json({
    status: 'error',
    message,
    code: statusCode,
  });
});

module.exports = { app, sequelize };
