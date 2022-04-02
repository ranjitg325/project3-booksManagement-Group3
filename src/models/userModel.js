const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({

    title: {
        type: String,
        enum: ["Mr", "Mrs", "Miss"],
        required: true
    },
    name: {
         type: String,
         required: true 
        },

    phone: {
        type : String, 
        required: true, 
        unique: true 
        },

    email:  { 
        type : String,
         required:true
        },
      
    password:{  
        type: String, 
        required: true,
         match:[/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Min length should be 8 and max length should be 15']
        },
    address: {
        street : {type: String},
        city : {type: String},
        pincode: {type: String},

    }

}, { timestamps: true })



module.exports = mongoose.model('Createuser', userSchema)
