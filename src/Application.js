'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const nombresRutas = require('./resources/routes');
const cors = require('cors');
const products = require('./routes/products')
const peripherals = require('./routes/peripherals')
const consoles = require('./routes/consoles')
const pcs = require('./routes/pcs')
const orders = require('./routes/orders')
const users = require('./routes/users')

const ROUTE_URL = '/api';

class Application {
    constructor() {
        this.express = express();
        this.setUpCors();
        this.setUpExpress();
        this.setUpRoutes();
        this.setUpNotFoundRoute();
        this.setUpPort();
    }

    setUpRoutes() {
        this.express.use(ROUTE_URL + nombresRutas.products.url, products);
        this.express.use(ROUTE_URL + nombresRutas.peripherals.url, peripherals);
        this.express.use(ROUTE_URL + nombresRutas.consoles.url, consoles);
        this.express.use(ROUTE_URL + nombresRutas.pcs.url, pcs);
        this.express.use(ROUTE_URL + nombresRutas.orders.url, orders);
        this.express.use(ROUTE_URL + nombresRutas.users.url, users);
    }

    setUpExpress() {
        this.express.use(bodyParser.json())
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    setUpPort() {
        this.express.set('port', process.env.PORT || 8000);
    }

    setUpNotFoundRoute() {
        this.express.use((request, response, next) => {
            const error = new Error("Resource not found");
            error.status = 404;
            next(error);
        });
    }

    setUpCors() {
        this.express.use(cors());
    }

}

module.exports = new Application().express;