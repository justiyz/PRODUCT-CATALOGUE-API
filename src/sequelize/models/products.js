'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: DataTypes.DECIMAL(19, 4),
    sku: DataTypes.STRING,
    image_url: DataTypes.STRING,
    description: DataTypes.STRING,
    currency: DataTypes.STRING,
    deleted_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'products',
    tableName: 'products',
    underscored: true,
    paranoid: true,
    deletedAt: 'deleted_at',
  });
  return Products;
};