'use strict';
const express = require('express');
const router = express.Router();
const routeNames = require('../resources/routes');
const productService = require('../app/services/productService');

router.get(
    routeNames.emptyUrl,
    async (request, response) => {
        try {
            const products = await productService.getProducts(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(products));
        }
        catch (error) {
            response.status(404).send(error);
        }
    }
);

router.get(
    routeNames.id,
    async (request, response) => {
        try {
            const product = await productService.getProductById(request.params.id);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(product));
        } catch (error) {
            response.status(404).send('Product Not Found');
        }
    }
);

module.exports = router;