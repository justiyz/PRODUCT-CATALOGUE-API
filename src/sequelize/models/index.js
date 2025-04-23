'use strict';

require('dotenv').config();

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);


const config = require(__dirname + '/../config/config.js');
const db = {};



let sequelize;
sequelize = new Sequelize(
  config.db_credentials.database,
  config.db_credentials.username,
  config.db_credentials.password,
  {host: config.db_credentials.host, dialect: config.db_credentials.dialect});


fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//PRODUCT DB
db.products = require('../models/products')(sequelize, Sequelize.DataTypes);














module.exports = db;
