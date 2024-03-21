"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Orders",
      [
        {
          name: "Мак",
          price: 500,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS94Uk6mXgVPdXaITcqHIGHCxK3Ka0yKqSMOqqaA5WWz625dVXN4ZXuJqfj9LkR0UOnuk4&usqp=CAU",
          discount: 50,
          userId: 1,
          
          : 'Две мясных котлеты гриль, специальный соус, сыр, огурцы, салат и лук, всё на булочке с кунжутом, только так и это Мак Дак',
          districtId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Суши",
          price: 2500,
          img: "https://yan-pizza.ru/wp-content/uploads/2020/08/dostavka-sushi-v-butovo-yuzhnoe-butovo.jpg",
          discount: 50,
          userId: 2,
          description: 'Ням-ням филадельфия',
          districtId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Ветчина и грибы",
          price: 1000,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnjq-l1t0ZCQwih3oOfn0HtW33zNrdQx45CQ&usqp=CAU",
          discount: 50,
          userId: 3,
          description: 'Нежная пицца с соусом "Чесночный Рэнч", Моцареллой, шампиньонами, ароматной ветчиной и чесноком',
          districtId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Wok",
          price: 350,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqXkVGQNUOSoi9wYtDmc2lOA7_ALAr6zmHew&usqp=CAU",
          discount: 50,
          userId: 4,
          description: 'Целая тарелка пикантной лапши, в которой попрятались кусочки курицы и свежих овощей. На глянце соуса кунжутные семечки и свежий зелёный лук. Самое то для голодного охотника за вкуснятиной.',
          districtId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Блинчики",
          price: 750,
          img: "https://www.timeout.ru/img/Ekaterina%20Solovey/21_01_19/11.jpg",
          discount: 50,
          userId: 5,
          description: 'lololo',
          districtId: 5,
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
