const express = require('express');
const Database  = require('./utilities/dbConnection');
const app = express();
const mongoose = require('mongoose');

const router = require('./api/routes');


app.use(express.json());
app.use(router);
Database.connect();

module.exports = app;
