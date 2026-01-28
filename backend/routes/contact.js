const express= require('express');
const router = express.Router();
const db = require('../db');
const sendEmail= require('../email');

//post
router.post('/contact',async(req,res)=>{
const {
    f_name,
    m_name,
    l_name,
    gender,
    email,
    number,
    subject,
    address,
    district,
    pinCode,
    message
}= req.body;

const sql = `INSERT INTO enquiry
(f_name,m_name,l_name,gender,email,mobile,subject,address,district,pinCode,message)
VALUES(?,?,?,?,?,?,?,?,?,?,?)`;

db.query(
    sql,
    [f_name,m_name,l_name,gender,email,number,subject,address,district,pinCode,message],
    async (err,result)=>{
        if(err){
            console.log(err);
            return res.status(500).json({message:'Database error'});
        }
        res.json({message:'Enquiry submit success'});
try{
    await sendEmail(
        email,
        'Enquiry Received',
        `<h1>Dear${f_name,l_name}</h1>
        <p>Thank you for contacting us.We will get back to you soon.</p>`
    );
}catch(e){
    console.log('Email failed');
}
 }
);

});




module.exports= router;