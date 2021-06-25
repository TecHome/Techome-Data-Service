const { Console, Product } = require('../models');
const productService = require('./productService');

const ConsoleService = {
    //GET
    getConsoles: async (request, response) => {
        try {
            let consoles = await Console.findAll({
                raw: true,
                nest: true,
                attributes: {
                    exclude: ['ProductId']
                },
                include: [{
                    model: Product,
                    as: 'product',
                    attributes: { exclude: ['id'] }
                }]
            });
            return { response: consoles };
        } catch (error) {
            throw error;
        };
    },

    getConsoleById: async (consoleId) => {
        try {
            let consoleR = await Console.findByPk(consoleId, {
                raw: true,
                nest: true,
                attributes: {
                    exclude: ['ProductId']
                },
                include: [{
                    model: Product,
                    as: 'product',
                    attributes: { exclude: ['id'] }
                }]
            });
            return { response: consoleR };
        } catch (error) {
            throw error;
        };
    },

    //POST
    createConsole: async (request, response) => {
        try {
            const product = await productService.createProduct(request.body.product, response)
            delete request.body.product;
            const newConsole = await Console.create({
                ...request.body,
                ProductId: product.response.id
            });
            const result = {
                message: 'Console created successfully',
                response: newConsole
            };
            return result;
        } catch (error) {
            throw error;
        }
    },
}
module.exports = ConsoleService;