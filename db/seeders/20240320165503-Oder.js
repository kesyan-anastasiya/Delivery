"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Orders",
      [
        {
          name: "Мак",
          price: 100,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS94Uk6mXgVPdXaITcqHIGHCxK3Ka0yKqSMOqqaA5WWz625dVXN4ZXuJqfj9LkR0UOnuk4&usqp=CAU",
          discount: 10,
          userId: 1,
          description: 'lololo',
          districtId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Суши",
          price: 100,
          img: "https://yan-pizza.ru/wp-content/uploads/2020/08/dostavka-sushi-v-butovo-yuzhnoe-butovo.jpg",
          discount: 10,
          userId: 2,
          description: 'lololo',
          districtId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Orders', null, {});
     
  },
};
