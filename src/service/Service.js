const bcrypt = require("bcrypt");
const responseCodes = require("./../config/responseCodes");
const _ = require("lodash");
const { has } = require("lodash");


class Service {
  constructor(model) {
    this.model = model;
  }

  async signin(body) {
    var response = {};
    try {
      console.log("________________SIGN IN SERVICE_____________________");
      console.log("Body: ", body);
      var hasProfile = await this.model.findOne({username: body.username}).exec();
      if (hasProfile) {
        console.log("Has Profile: ", hasProfile);
        const result = this.compareAsync(body.password, hasProfile.password);
        console.log("Result: ", result);
        if (result) {

          return responseCodes["02"];
        }
        response = responseCodes["03"];
        console.log("Has Profile: ", hasProfile);
        response.body.data = hasProfile;
        return response;
      }
      return responseCodes["05"];
    } catch (error) {
      console.log("error", error);
      response = responseCodes["07"];
      response.body.data = error;
      return response;
    }
  }

  async signup(body) {
    var response = {};
    try {
      console.log("________________SIGNUP SERVICE_____________________");
      const hashedPass = bcrypt.hashSync(body.password, 10);
      body.password = hashedPass;
      console.log("Body: ", body);
      var newUser = await this.model.create(body);
      if(!_.isEmpty(newUser)){
        response = responseCodes['08'];
        response.body.data = newUser;  
        console.log("New User response: ", response);
          return response;
      }
      return responseCodes['20'];
    } catch (error) {
        console.log('error', error);
            response = responseCodes["07"];
            response.body.data = error;
            return response;
    }
  }

  compareAsync(oldPassword, newPassword) {
    new Promise(function (resolve, reject) {
      bcrypt.compareSync(oldPassword, newPassword, function (res, err) {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  async insert(data) {
    var response = {};
    try {
      console.log(
        "_________________________INSERT METHOD SERVICE ________________________"
      );
      console.log("Data ", data);
      var item = await this.model.create(data);
      console.log("Item ", item);
      if (!_.isEmpty(item)) {
        response = responseCodes["06"];
        response.body.data = item;
        return response;
      }
      response = responseCodes["10"];
      return response;
    } catch (error) {
      response = responseCodes["07"];
      console.log("Error: ", error);
      response.body.data = error;
      return response;
    }
  }

  async find() {
    try {
      console.log("___________________FIND SERVICE____________________");
      console.log("Model: ", this.model.collection.name);
      var response = await this.model.find({}).exec();
      return response;
    } catch (error) {
      console.log("Error: ", error);
      var response = responseCodes["07"];
      response.body.data = error;
      return response;
    }
  }

  async findOneAndUpdate(query, payload) {
    try {
      console.log("_____________findOneAndUpdate SERVICE____________");
      var response = await this.model.findOneAndUpdate(query, payload, {
        new: true,
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log("error", error);
      response = responseCodes["07"];
      response.body.data = error;
      return response;
    }
  }

  async findOne(query) {
    try {
      console.log(
        "_____________________findOne SERVICE ________________________"
      );
      var response = await this.model.findOne(query).exec();
      return response;
    } catch (error) {
      console.log("Error: ", error);
      var response = responseCodes["07"];
      response.body.data = error;
      return response;
    }
  }
}

module.exports = Service;
