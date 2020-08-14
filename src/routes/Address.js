const express = require('express');
const Controller = require('../controller/AddressController');

const routes = express.Router();

routes.get('/users/:user_id/addresses', Controller.index);
routes.post('/users/:user_id/addresses', Controller.store);

module.exports = routes;