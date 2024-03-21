"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Alex",
          email: 'Alex@gmail.com',
          password: "123",
          status: 'Admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Katy",
          email: 'Katy@gmail.com',
          password: "124",
          status: 'lox',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Nastya",
          email: 'Nastya@gmail.com',
          password: "125",
          status: 'lox',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Nikita",
          email: 'Nikita@gmail.com',
          password: "126",
          status: 'lox',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Kostan",
          email: 'Kostan@gmail.com',
          password: "127",
          status: 'lox',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Users', null, {});
     
  },
};
