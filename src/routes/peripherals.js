'use strict';
const express = require('express');
const router = express.Router();
const routeNames = require('../resources/routes');
const peripheralServicie = require('../app/services/peripheralService');

router.get(
    routeNames.emptyUrl,
    async (request, response) => {
        try {
            const peripherals = await peripheralServicie.getPeripherals(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(peripherals));
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
            const peripheral = await peripheralServicie.getPeripheralById(request.params.id);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(peripheral));
        } catch (error) {
            response.status(404).send('Peripheral Not Found');
        }
    }
);

module.exports = router;