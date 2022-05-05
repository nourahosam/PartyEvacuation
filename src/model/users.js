const mongoose = require('mongoose');
const { Schema } = require('mongoose');

class user{
    initSchema(){
        const userSchema = new Schema({
            username: String,
            password: String
        });
        mongoose.model('User', userSchema);        
    }
    getInstance(){
        this.initSchema();
        return mongoose.model('User');
    }

}

module.exports = new user().getInstance();