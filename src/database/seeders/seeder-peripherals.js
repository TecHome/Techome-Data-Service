'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Peripherals', 
        [   
            {
                size: '70 cm',
                weight: '700 m',
                colors: 'Green',
                ProductId: 2,
            },
            {
                size: '80 cm',
                weight: '800 m',
                colors: 'Blue',
                ProductId: 5,
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Peripherals', null, {});
    }
};