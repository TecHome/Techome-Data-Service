const { Peripheral, Product } = require('../models');

const PeripheralService = {
    getPeripherals: async (request, response) => {
        try {
            let peripherals = await Peripheral.findAll({
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
            return { response: peripherals };
        } catch (error) {
            throw error;
        }
    },

    getPeripheralById: async (peripheralId) => {
        try {
            let peripheral = await Peripheral.findByPk(peripheralId, {
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
            return { response: peripheral };
        } catch (error) {
            throw error;
        };
    },
}
module.exports = PeripheralService;