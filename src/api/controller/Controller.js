const responseCodes = require("./../../config/responseCodes");

class Controller {
  constructor(service, model) {
    this.service = service;
    this.model = model;
  }

  async signin(req, res){
    var response = {};
    try {
        console.log("________________SIGNIN CONTROLLER_____________________");
        var response = await this.service.signin(req.body);
        return response;
    } catch (error) {
        response = responseCodes["07"];
        response.body.data = error;
        return response;
    }
  }

  async signup(req, res){
      var response = {};
      try {
          console.log("_____________________SignUP CONTROLLER________________________");
          var response = await this.service.signup(req.body);
          return response;
      } catch (error) {
        response = responseCodes["07"];
        response.body.data = error;
        return response;
      }
  }

  async insert(req, res) {
    var response = {};
    try {
      console.log(
        "_________________INSERT METHOD CONTROLLER______________________"
      );
      response = await this.service.insert(req.body);
      return response;
    } catch (error) {
      console.log("Error: ", error);
      response = responseCodes["07"];
      response.body.data = error;
      return response;
    }
  }

  async update(req, res) {
    var response = {};
    try {
      console.log(
        "_____________________UPDATE METHOD CONTROLLER _________________________"
      );
      console.log("EmpID", req.body.employeeId)
      const query = {
        employeeId: req.body.employeeId,
      };
      response = await this.service.findOneAndUpdate(query, req.body);
      console.log("Response: ", response);
      return response;
    } catch (error) {
      console.log("Error: ", error);
      response = returnCodes["07"];
      response.body.data = error;
      return response;
    }
  }

  async findOne(req, res) {
    var response = {};
    try {
      console.log(
        "____________________FINDONE METHOD CONTROLLER______________________"
      );
      const query = {
        _id: req.params._id,
      };
      response = await this.service.findOne(query);
      return response;
    } catch (error) {
      console.log("Error: ", error);
      response = returnCodes["07"];
      response.body.data = error;
      return response;
    }
  }

  async findAll(req, res) {
    var response = {};
    try {
      console.log("_____________FINDALL METHOD CONTROLLER_______________");
      response = await this.service.find();
      console.log("response", response);
      return response;
    } catch (error) {
      console.log("errr", error);
      response = responseCodes["07"];
      response.body.data = error;
      return response;
    }
  }
}

module.exports = Controller;
