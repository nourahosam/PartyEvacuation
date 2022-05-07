const express = require('express');
const app = express();
const Database  = require('./utilities/dbConnection');
const cors = require('cors');
const mongoose = require('mongoose');


const router = require('./api/routes');

app.use(cors());
app.use(express.json());
app.use(router);


Database.connect();

module.exports = app;
