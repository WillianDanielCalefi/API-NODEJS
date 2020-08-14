const express = require('express');
const Controller = require('../controller/ReportController');

const routes = express.Router();

routes.get('/report', Controller.show);

module.exports = routes;