'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Products', 
        [   
            {
                name: 'Producto PC 1',
                price: 1000,
                description: 'Producto PC 1',
                brand: 'Marca',
                code: 'Codigo',
                stock: 10,
                imageBg: 'url',
                imageCard: 'url',
                imageGallery: 'url'
            },
            {
                name: 'Producto Periferico 1',
                price: 500,
                description: 'Producto Periferico 1',
                brand: 'Marca',
                code: 'Codigo',
                stock: 10,
                imageBg: 'url',
                imageCard: 'url',
                imageGallery: 'url'
            },
            {
                name: 'Producto Consola 1',
                price: 100,
                description: 'Producto Consola 1',
                brand: 'Marca',
                code: 'Codigo',
                stock: 10,
                imageBg: 'url',
                imageCard: 'url',
                imageGallery: 'url'
            },
            {
                name: 'Producto PC 2',
                price: 1000,
                description: 'Producto PC 2',
                brand: 'Marca',
                code: 'Codigo',
                stock: 10,
                imageBg: 'url',
                imageCard: 'url',
                imageGallery: 'url'
            },
            {
                name: 'Producto Periferico 2',
                price: 500,
                description: 'Producto Periferico 2',
                brand: 'Marca',
                code: 'Codigo',
                stock: 10,
                imageBg: 'url',
                imageCard: 'url',
                imageGallery: 'url'
            },
            {
                name: 'Producto Consola 2',
                price: 100,
                description: 'Producto Consola 2',
                brand: 'Marca',
                code: 'Codigo',
                stock: 10,
                imageBg: 'url',
                imageCard: 'url',
                imageGallery: 'url'
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Products', null, {});
    }
};