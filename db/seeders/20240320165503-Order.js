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
          description: 'Две мясных котлеты гриль, специальный соус, сыр, огурцы, салат и лук, всё на булочке с кунжутом, только так и это Мак Дак',
          districtId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Макарошкин Ослик",
          price: 500,
          img: "https://i.pinimg.com/736x/0d/2f/0f/0d2f0faf277f4cd6d35d1affeadd181f.jpg",
          discount: 50,
          userId: 1,
          description: 'Бедный обед для ребенка((( хлуб макароны огурец и два ломника дешевый колбасы',
          districtId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Суши",
          price: 2500,
          img: "https://yan-pizza.ru/wp-content/uploads/2020/08/dostavka-sushi-v-butovo-yuzhnoe-butovo.jpg",
          discount: 50,
          userId: 1,
          description: 'Ням-ням филадельфия',
          districtId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Самса с мясом",
          price: 300,
          img: "https://i65.shop/upload/iblock/83f/py6xzdlrrulrmob8lz6cvv9wxtto1jdg.jpg",
          discount: 50,
          userId: 1,
          description: 'Сочная шо груди любимой женщины',
          districtId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Ветчина и грибы",
          price: 1000,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnjq-l1t0ZCQwih3oOfn0HtW33zNrdQx45CQ&usqp=CAU",
          discount: 50,
          userId: 1,
          description: 'Нежная пицца с соусом "Чесночный Рэнч", Моцареллой, шампиньонами, ароматной ветчиной и чесноком',
          districtId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Кура гриль",
          price: 950,
          img: "https://bbqgourmet.ru/wp-content/uploads/2022/10/wine-and-grill-6.jpg",
          discount: 50,
          userId: 1,
          description: 'Эта сочная курочка составит тебе компанию с бокальчиком вина',
          districtId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Wok",
          price: 350,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqXkVGQNUOSoi9wYtDmc2lOA7_ALAr6zmHew&usqp=CAU",
          discount: 50,
          userId: 1,
          description: 'Целая тарелка пикантной лапши, в которой попрятались кусочки курицы и свежих овощей. На глянце соуса кунжутные семечки и свежий зелёный лук. Самое то для голодного охотника за вкуснятиной.',
          districtId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
        {
          name: "Устрицы",
          price: 3500,
          img: "https://oyster.market/upload/iblock/476/hn1z8ebeud1mpeh3nkeidiibkwt6v2j3.jpg",
          discount: 50,
          userId: 1,
          description: 'Мидузы живые почти как устрицы и долька лимона',
          districtId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Вареники",
          price: 350,
          img: "https://www.ermolino-produkty.ru/recipes/picts/recipes/tnw682-vareniki-s-kartoshkoy_bekonom-630%D1%85470.jpg",
          discount: 50,
          userId: 1,
          description: 'Варкнник обычный с картохой, отвечаю вкусные!',
          districtId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },


        {
          name: "Блинчики",
          price: 750,
          img: "https://www.timeout.ru/img/Ekaterina%20Solovey/21_01_19/11.jpg",
          discount: 50,
          userId: 1,
          description: 'lololo',
          districtId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Блинчики",
          price: 750,
          img: "https://www.timeout.ru/img/Ekaterina%20Solovey/21_01_19/11.jpg",
          discount: 50,
          userId: 1,
          description: 'lololo',
          districtId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Блинчики",
          price: 750,
          img: "https://www.timeout.ru/img/Ekaterina%20Solovey/21_01_19/11.jpg",
          discount: 50,
          userId: 1,
          description: 'lololo',
          districtId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },


        {
          name: "Блинчики",
          price: 750,
          img: "https://www.timeout.ru/img/Ekaterina%20Solovey/21_01_19/11.jpg",
          discount: 50,
          userId: 1,
          description: 'lololo',
          districtId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Блинчики",
          price: 750,
          img: "https://www.timeout.ru/img/Ekaterina%20Solovey/21_01_19/11.jpg",
          discount: 50,
          userId: 1,
          description: 'lololo',
          districtId: 9,
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
