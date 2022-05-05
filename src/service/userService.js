const Service = require('./Service');
const userModel = require('./../model/users');

class userService extends Service{
    constructor(model){
        super(model);
        this.model = model;
    }
}

module.exports = new userService(userModel);