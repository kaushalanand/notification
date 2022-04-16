const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type: String
    },

    address : {
        type : String
    },

    contactType : {
        type : String,
        enum : ['PhoneNumber', 'Email', 'WhatsApp', 'Slack']
    },

    role : {
        type : String,
        enum : ['Admin', 'User']
    }
});

module.exports = mongoose.model('User', userSchema);