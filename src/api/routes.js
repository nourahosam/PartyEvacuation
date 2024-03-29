const express = require('express');
const UserController = require('./controller/UserController');
const EmployeeController = require('./controller/EmployeeController');
const router = express.Router();
  

router.get('/employee/car', async (req, res, next) => {
    //const response = await UserController.insert(req, res);
    console.log(res);
    console.log("HERee");
    res.send(req.body);
  });

  router.post('/employee/car', async (req, res, next) => {
    const response = await EmployeeController.update(req, res);
    const response2 = await EmployeeController.findAll();
    console.log(response2.body);
    res.status(response.status ? response.status : 500).json(response.body);
  });



  router.post('/employee/create', async (req, res, next) => {
    const response = await EmployeeController.insert(req, res);
    const response2 = await EmployeeController.findAll();
    console.log(response2.body);
    res.status(response.status ? response.status : 500).json(response.body);
  });

  router.post('/user/signup', async (req, res, next) => {
    console.log(req);
    const response = await UserController.signup(req, res);
    res.status(response.status ? response.status : 500).json(response.body);
  });

  router.post('/user/signin', async (req, res, next) => {
    const response = await UserController.signin(req, res);
    res.status(response.status ? response.status : 500).json(response.body);
  });

module.exports = router;