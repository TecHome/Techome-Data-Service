'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable('Consoles', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            size: {
                type: Sequelize.STRING,
                allowNull: true
            },
            weight: {
                type: Sequelize.STRING,
                allowNull: true
            },
            colors: {
                type: Sequelize.STRING,
                allowNull: true
            },
            controls: {
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
        return queryInterface.dropTable('Consoles');
    }
}