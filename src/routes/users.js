'use strict';
const express = require('express');
const router = express.Router();
const routeNames = require('../resources/routes');
const userService = require('../app/services/userService');

router.get(
    routeNames.empty,
    async (request, response) => {
        try {
            const users = await userService.getUsers(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(users));
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
            const user = await userService.getUserById(request.params.id);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(user));
        } catch (error) {
            response.status(404).send('User Not Found');
        }
    }
);

router.post(
    routeNames.empty,
    async (request, response) => {
        try {
            const newUser = await userService.createUser(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(newUser));
        } catch (error) {
            response.status(404).send('Error while creating User');
        }
    }
);

module.exports = router;
