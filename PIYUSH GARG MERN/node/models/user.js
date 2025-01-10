const mongoose = require('mongoose');


// MONGOOSE Schema (like typescirpt interface)
const userScheme = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    job_title: {
        type: String,
    },
    gender: {
        type: String,
    }
}, { timestamps: true })

//Schema model
const User = mongoose.model("user", userScheme) // user is MODEL name and userSchea got passed

module.exports = User;