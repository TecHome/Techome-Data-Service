'use strict';
const express = require('express');
const router = express.Router();
const routeNames = require('../resources/routes');
const orderService = require('../app/services/orderService');

router.get(
    routeNames.empty,
    async (request, response) => {
        try {
            const orders = await orderService.getOrders(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(orders));
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
            const order = await orderService.getOrderById(request.params.id);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(order));
        } catch (error) {
            response.status(404).send('Order Not Found');
        }
    }
);

router.post(
    routeNames.empty,
    async (request, response) => {
        try {
            const newOrder = await orderService.createOrder(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(newOrder));
        } catch (error) {
            response.status(404).send('Error while creating Order');
        }
    }
);

module.exports = router;
