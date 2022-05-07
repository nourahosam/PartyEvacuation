const express = require('express');
const app = require('./src/app');

app.listen(4000, ()=>{
    console.log("listening on port 4000");
});