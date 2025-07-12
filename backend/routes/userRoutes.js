const express = require('express');
const router = express.Router();
const {createuser, getUser,updateUser, deleteUser} = require('../controllers/userController');
router.post('/',createuser);
router.get('/',getUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);
module.exports=router;