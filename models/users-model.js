const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {type: String , required:true},
    lastName: {type: Number, required:true},
    age: {type: Number, required:true},
    eMail : {type: String, required:true},
    password:{type:String,require:true}
},
{
    timeseries: true
}
)
module.exports = mongoose.model('users', UserSchema)