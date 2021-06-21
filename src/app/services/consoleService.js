const { Console, Product } = require('../models');

const ConsoleService = {
    getConsoles: async (request, response) => {
        try {
            let consoles = await Console.findAll({
                raw: true,
                nest: true,
                attributes: {
                    exclude: ['ProductId']
                },
                include: [
                    {
                        model: Product,
                        as: 'product',
                        attributes: { exclude: ['id'] }
                    }
                ]
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
                include: [
                    {
                        model: Product,
                        as: 'product',
                        attributes: { exclude: ['id'] }
                    }
                ]
            });
            return { response: consoleR };
        } catch (error) {
            throw error;
        };
    },
}
module.exports = ConsoleService;