const mongoose = require('mongoose');

const connectdb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Mongodb connected successfully.');
    }
    catch(err){
        console.error("Error connecting to Mongodb:",err.message);
        process.exit(1);
    }
}
module.exports = connectdb;