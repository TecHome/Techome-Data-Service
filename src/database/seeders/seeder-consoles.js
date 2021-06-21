'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Consoles', 
        [   
            {
                size: '10 cm',
                weight: '100 m',
                colors: 'Black',
                controls: '2 Controls',
                ProductId: 3,
            },
            {
                size: '20 cm',
                weight: '200 m',
                colors: 'Gray',
                controls: '1 Control',
                ProductId: 6,
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Consoles', null, {});
    }
};