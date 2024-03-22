'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'Districts',
            [
                {
                    name: 'Адмиралтейский район',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },

                {
                    name: 'Василеостровский район',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },

                {
                    name: 'Выборгский район',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },

                {
                    name: ' Калининский район',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },

                {
                    name: ' Кировский район',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },

                {
                    name: 'Колпинский район',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },

                {
                    name: 'Красногвардейский район',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },

                {
                    name: 'Московский район',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },

                {
                    name: 'Невский район',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        )
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Districts', null, {})
    },
}
