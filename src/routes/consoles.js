'use strict';
const express = require('express');
const router = express.Router();
const routeNames = require('../resources/routes');
const consoleService = require('../app/services/consoleService');

router.get(
    routeNames.empty,
    async (request, response) => {
        try {
            const consoles = await consoleService.getConsoles(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(consoles));
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
            const consoleR = await consoleService.getConsoleById(request.params.id);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(consoleR));
        } catch (error) {
            response.status(404).send('Console Not Found');
        }
    }
);

router.post(
    routeNames.empty,
    async (request, response) => {
        try {
            const newConsole = await consoleService.createConsole(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(newConsole));
        } catch (error) {
            response.status(404).send('Error while creating Console');
        }
    }
);

module.exports = router;
