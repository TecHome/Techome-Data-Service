'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable('Products', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING,
                allowNull: true
            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            description: {
                type: Sequelize.STRING,
                allowNull: true
            },
            brand: {
                type: Sequelize.STRING,
                allowNull: true
            },
            code: {
                type: Sequelize.STRING,
                allowNull: true
            },
            stock: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            imageBg: {
                type: Sequelize.STRING,
                allowNull: true
            },
            imageCard: {
                type: Sequelize.STRING,
                allowNull: true
            },
            imageGallery: {
                type: Sequelize.STRING,
                allowNull: true
            }
        })
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable('Products');
    }
}