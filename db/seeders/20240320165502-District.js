"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Districts",
      [
        {
          name: "Невский",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Выборгский",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Калининский",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Красногвардейский",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Приморский",
          createdAt: new Date(),
          updatedAt: new Date(),
        },


      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Districts', null, {});
     
  },
};
