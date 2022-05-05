const userService = require('./../../service/userService');
const userModel = require('./../../model/users');
const Controller = require('./Controller');


class UserController extends Controller{
    constructor(service, model){
        super(service, model);
        this.service = service;
        this.model = model;
    }
}

module.exports = new UserController(userService, userModel);