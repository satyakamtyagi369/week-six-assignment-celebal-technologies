const mongoose = require('mongoose');
const userschema = new mongoose.Schema({
    name:{type:String, required:true},
    products: {type:String, required:true}
});
module.exports = mongoose.model('User',userschema);