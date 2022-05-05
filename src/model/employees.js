const mongoose = require("mongoose");
const { Schema } = require('mongoose');


class employee{
    initSchema(){
        const employeeSchema = Schema({
            employeeId: String,
            carState: Boolean,
            secIdState: Boolean,
            financialState: Boolean
            
        });
        mongoose.model('Employee', employeeSchema);        
    }
    getInstance(){
        this.initSchema();
        return mongoose.model('Employee');
    }

}

module.exports = new employee().getInstance();