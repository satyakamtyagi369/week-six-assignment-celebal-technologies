const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const connectdb = require('./config/db');
const userRoutes = require('./routes/userRoutes');
dotenv.config();
connectdb();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/users',userRoutes);
app.use(express.static(path.join(__dirname, '../frontend')));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../frontend/index.html'));
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
