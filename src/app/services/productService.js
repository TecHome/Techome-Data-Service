const { Product } = require('../models');

const ProductService = {

    //GET
    getProducts: async (request, response) => {
        try {
            let products = await Product.findAll({
                raw: true,
                nest: true,
            });
            return { response: products };
        } catch (error) {
            throw error;
        }
    },

    getProductById: async (productId) => {
        try {
            let product = await Product.findByPk(productId, {
                raw: true,
                nest: true,
            });
            return { response: product };
        } catch (error) {
            throw error;
        };
    },

    //POST
    createProduct: async (request, response) => {
        try {
            const newProduct = await Product.create(request);
            const result = {
                message: 'Product created successfully',
                response: newProduct.dataValues
            };
            return result;
        } catch (error) {
            throw error;
        }
    },

}
module.exports = ProductService;