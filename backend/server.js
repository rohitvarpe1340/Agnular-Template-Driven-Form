const express= require('express');
const cors =require('cors');
const app=express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

const port = 3000;

const contactRoutes = require('./routes/contact');

app.use('/api',contactRoutes);



app.listen(port,()=>{
    console.log(`server is running http://localhost:${port}`);
});

