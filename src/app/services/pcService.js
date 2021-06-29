const { PC, Product } = require('../models');
const productService = require('./productService');

const PCService = {
    //GET
    getPCs: async (request, response) => {
        try {
            let pcs = await PC.findAll({
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
            return { response: pcs };
        } catch (error) {
            throw error;
        }
    },

    getPCById: async (pcId) => {
        try {
            let pc = await PC.findByPk(pcId, {
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
            return { response: pc };
        } catch (error) {
            throw error;
        };
    },

    //POST
    createPC: async (request, response) => {
        try {
            const product = await productService.createProduct(request.body.product, response);
            delete request.body.product;
            const newPC = await PC.create({
                ...request.body,
                ProductId: product.response.id
            });
            const result = {
                message: 'PC created successfully', 
                response: newPC
            };
            return result;
        } catch (error) {
            throw error;
        }
    },
}
module.exports = PCService;