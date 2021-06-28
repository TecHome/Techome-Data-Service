'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable('Orders', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            address: {
                type: Sequelize.STRING,
                allowNull: true
            },
            city: {
                type: Sequelize.STRING,
                allowNull: true
            },
            date: {
                type: Sequelize.STRING,
                allowNull: true
            },
            discount: {
                type: Sequelize.STRING,
                allowNull: true
            },
            deliveryDate: {
                type: Sequelize.STRING,
                allowNull: true
            },
            card: {
                type: Sequelize.STRING,
                allowNull: true
            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            shipping: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            ProductId: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            UserId: {
                type: Sequelize.INTEGER,
                allowNull: true
            }
        })
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable('Orders');
    }
}