'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Info.init({
    name: DataTypes.TEXT,
    adress: DataTypes.TEXT,
    comment: DataTypes.TEXT,
    phone: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Info',
  });
  return Info;
};