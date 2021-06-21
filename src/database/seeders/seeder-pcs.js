'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('PCs', 
        [   
            {
                processor: 'Processor',
                motherBoard: 'MotherBoard',
                sd: 'SD',
                ram: 'RAM',
                videoCard: 'VideoCard',
                keyboard: 'Keyboard',
                cooling: 'Cooling',
                screen: 'Screen',
                mouse: 'Mouse',
                speakers: 'Speakers',
                powerUsage: 'PowerUsage',
                case: 'Case',
                ProductId: 1,
            },
            {
                processor: 'Processor',
                motherBoard: 'MotherBoard',
                sd: 'SD',
                ram: 'RAM',
                videoCard: 'VideoCard',
                keyboard: 'Keyboard',
                cooling: 'Cooling',
                screen: 'Screen',
                mouse: 'Mouse',
                speakers: 'Speakers',
                powerUsage: 'PowerUsage',
                case: 'Case',
                ProductId: 4,
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('ConPCssoles', null, {});
    }
};