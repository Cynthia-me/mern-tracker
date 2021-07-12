const express = require('express');
const mongoose = require('./connection.js');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const userRoutes = require('./Routes/users.js');
const exerciseRoutes = require('./Routes/exercises.js')

const PORT = process.env.PORT || 4700;


app.use('/mern/api/v1/users',userRoutes)
app.use('/mern/api/v1/exercises',exerciseRoutes)

app.get('/',(req,res)=>{
    res.send("EXERCISE TRACKER APP")
})

app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`)
});