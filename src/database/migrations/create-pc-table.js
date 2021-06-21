'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable('PCs', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            processor: {
                type: Sequelize.STRING,
                allowNull: true
            },
            motherBoard: {
                type: Sequelize.STRING,
                allowNull: true
            },
            sd: {
                type: Sequelize.STRING,
                allowNull: true
            },
            ram: {
                type: Sequelize.STRING,
                allowNull: true
            },
            videoCard: {
                type: Sequelize.STRING,
                allowNull: true
            },
            keyboard: {
                type: Sequelize.STRING,
                allowNull: true
            },
            cooling: {
                type: Sequelize.STRING,
                allowNull: true
            },
            screen: {
                type: Sequelize.STRING,
                allowNull: true
            },
            mouse: {
                type: Sequelize.STRING,
                allowNull: true
            },
            speakers: {
                type: Sequelize.STRING,
                allowNull: true
            },
            powerUsage: {
                type: Sequelize.STRING,
                allowNull: true
            },
            case: {
                type: Sequelize.STRING,
                allowNull: true
            },
            ProductId: {
                type: Sequelize.INTEGER,
                allowNull: false
            }
        })
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable('PCs');
    }
}