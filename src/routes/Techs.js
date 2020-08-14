const express = require('express');
const Controller = require('../controller/TechController');

const routes = express.Router();

routes.get('/users/:user_id/techs', Controller.index);
routes.post('/users/:user_id/techs', Controller.store);
routes.delete('/users/:user_id/techs', Controller.delete);

module.exports = routes;