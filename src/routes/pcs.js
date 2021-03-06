'use strict';
const express = require('express');
const router = express.Router();
const routeNames = require('../resources/routes');
const pcService = require('../app/services/pcService');

router.get(
    routeNames.empty,
    async (request, response) => {
        try {
            const pcs = await pcService.getPCs(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(pcs));
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
            const pc = await pcService.getPCById(request.params.id);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(pc));
        } catch (error) {
            response.status(404).send('PC Not Found');
        }
    }
);

router.post(
    routeNames.empty,
    async (request, response) => {
        try {
            const newPc = await pcService.createPC(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(newPc));
        } catch (error) {
            response.status(404).send('Error while creating PC');
        }
    }
);

module.exports = router;
