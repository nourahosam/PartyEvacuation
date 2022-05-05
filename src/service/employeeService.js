const Service = require('./Service');
const employeeModel = require('./../model/employees');

class employeeService extends Service{
    constructor(model){
        super(model);
        this.model = model;
    }
}

module.exports = new employeeService(employeeModel);