'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({District,User}) {
    this.belongsTo(District,{foreignKey: "districtId"})
    this.belongsTo(User,{foreignKey: "userId"})
    }
  }
  Oder.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    img: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    discount: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    onDelete:'cascade',
    onUpdate:'cascade'
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    districtId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Districts',
        key: 'id',
      },
    onDelete:'cascade',
    onUpdate:'cascade'
    },
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};