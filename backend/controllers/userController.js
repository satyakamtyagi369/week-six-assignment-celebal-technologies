const User = require('../models/User');
const createuser = async (req,res)=>{
    const {name,email} = req.body;
    const user = new User({
        name,
        email
    });
    await user.save();
    res.status(201).json(user);
};
//sare users read karne ke liye.
const getUser = async (req,res)=>{
    const users = await User.find();
    res.json(users);
}
//user ko update karne ke liye.
const updateUser = async (req,res)=>{
    const {id}= req.params;
    const updateUser = await User.findByIdAndUpdate(id, req.body,{new:true});
    res.json(updateUser);
}
// user ko delete karne ke liye.
const deleteUser = async (req,res)=>{
    const {id}= req.params;
    await User.findByIdAndDelete(id);
    res.json({message:"User deleted successfully."});
}
module.exports = {createuser, getUser, updateUser, deleteUser};