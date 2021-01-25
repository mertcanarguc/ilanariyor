const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    adsoyad:String,
    tel:String,
    il:String,
    ilce:String,
    adres:String,
    state:{
        type:Boolean,
        default:false
    },
    username: String,
    password: String
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);