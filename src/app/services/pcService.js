const { PC, Product } = require('../models');

const PCService = {
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
                        attributes: { exclude: ['id'] }
                    }
                ]
            });
            return { response: pc };
        } catch (error) {
            throw error;
        };
    },
}
module.exports = PCService;