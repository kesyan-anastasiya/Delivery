"use strict";
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Alex",
          email: 'Alex@gmail.com',
          password: await bcrypt.hash('123', 10),
          status: 'Admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Katy",
          email: 'Katy@gmail.com',
          password: await bcrypt.hash('124', 10),
          status: 'lox',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Nastya",
          email: 'Nastya@gmail.com',
          password: await bcrypt.hash('125', 10),
          status: 'lox',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Nikita",
          email: 'Nikita@gmail.com',
          password: await bcrypt.hash('126', 10),
          status: 'lox',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Kostan",
          email: 'Kostan@gmail.com',
          password: await bcrypt.hash('127', 10),
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
