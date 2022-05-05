const mongoose = require('mongoose');

class Database {
  constructor() {
    this.url = process.env.MONGO_URL || "mongodb://localhost/testdbb";
  }
  async connect() {
    mongoose.connection.on("connecting", ()=>{
    console.log("Connecting to the database");
    });
    mongoose.connection.on("connected", ()=>{
    console.log("Connected to the database");
    });
    mongoose.connection.on("error", (err)=>{
        console.log("There was an error when connecting to database: ", err)
    });
    mongoose.connection.on("disconnected", ()=>{
        console.log("Disconnected to database");
    });
    mongoose.connect(this.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
  }
}

module.exports = new Database();