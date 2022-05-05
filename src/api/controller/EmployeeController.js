const employeeService = require('./../../service/employeeService');
const employeeModel = require('./../../model/employees');
const Controller = require('./Controller');

class employeeController extends Controller{
    constructor(service, model){
        super(service, model);
        this.service = service;
        this.model = model;
    }
}

module.exports = new employeeController(employeeService, employeeModel);