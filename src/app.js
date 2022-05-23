const express = require('express');
const app = express();
const Database  = require('./utilities/dbConnection');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const router = require('./api/routes');

app.use(cors());
app.use(express.json());

// app.use(cookieParser());
// app.use(session({
//     key: "",
//     secret: "",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         expires: 60
//     }
// }))
app.use(router);


Database.connect();

module.exports = app;
