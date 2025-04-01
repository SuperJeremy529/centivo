const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    name: {
        type: mongoose.Schema.Types.String, 
        required: true

    },

    age: {
        type: mongoose.Schema.Types.Number,
        required: true
    },

    email: {
        type: mongoose.Schema.Types.String, 
        required: true
    }},

    {
        timestamps: true
    }
);


const User = mongoose.model('User', userSchema);
  
module.exports = User;


