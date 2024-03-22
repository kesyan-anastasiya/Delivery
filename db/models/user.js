'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Order }) {
            this.hasMany(Order, { foreignKey: 'userId' })
        }
    }
    User.init(
        {
            name: {
                allowNull: false,
                type: DataTypes.TEXT,
            },
            email: {
                allowNull: false,
                type: DataTypes.TEXT,
            },
            password: {
                allowNull: false,
                type: DataTypes.TEXT,
            },
            status: {
                allowNull: false,
                type: DataTypes.TEXT,
            },
        },
        {
            sequelize,
            modelName: 'User',
        }
    )
    return User
}
