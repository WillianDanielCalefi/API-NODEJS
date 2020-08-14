const express = require('express');
const Controller = require('../controller/UserController');

const routes = express.Router();

routes.post('/users', Controller.store);
routes.get('/users', Controller.index);

module.exports = routes;