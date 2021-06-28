const { Order, Product } = require('../models');
const productService = require('./productService');

const OrderService = {
    //GET
    getOrders: async (request, response) => {
        try {
            let orders = await Order.findAll({
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
            return { response: orders };
        } catch (error) {
            throw error;
        }
    },

    getOrderById: async (orderId) => {
        try {
            let order = await Order.findByPk(orderId, {
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
            return { response: order };
        } catch (error) {
            throw error;
        };
    },

    //POST
    createOrder: async (request, response) => {
        try {
            //const product = await productService.createProduct(request.body.product, response);
            //delete request.body.product;
            const newOrder = await Order.create(request.body);
            const result = {
                message: 'Order created successfully', 
                response: newOrder
            };
            return result;
        } catch (error) {
            throw error;
        }
    },
}
module.exports = OrderService;