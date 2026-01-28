//import module    
const nodemailer = require("nodemailer");

//create email transporter
const sendEmail = async(to,subject,htmlContent)=>{
const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
         user: process.env.EMAIL_USER,  
        pass: process.env.EMAIL_PASS 
    }
});

await transporter.sendMail({
    from:'"Enquire App"<rohitvarpe1340@gmail.com>',
    to,
    subject,
    html:htmlContent
});
};
module.exports = sendEmail;