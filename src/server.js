const express = require('express');
const routeUser = require('./routes/user');
const routeAddress = require('./routes/Address');
const routeTechs = require('./routes/Techs');
const routeReport = require('./routes/Report');

require('./database');

const app = express();

app.use(express.json());

app.use(routeUser);
app.use(routeAddress);
app.use(routeTechs);
app.use(routeReport);

app.listen(3333);
