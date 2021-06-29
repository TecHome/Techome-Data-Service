const { Peripheral, Product } = require('../models');
const productService = require('./productService');

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
                        //attributes: { exclude: ['id'] }
                    }
                ]
            });
            return { response: peripheral };
        } catch (error) {
            throw error;
        };
    },

    //POST
    createPeripheral: async (request, response )=>{
        try {
            const product = await productService.createProduct(request.body.product, response)
            delete request.body.product;
            const newPeripheral = await Peripheral.create({
                ...request.body,
                ProductId: product.response.id
            });
            const result = {
                message: 'Peripheral created successfully',
                response: newPeripheral
            };
            return result;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = PeripheralService;