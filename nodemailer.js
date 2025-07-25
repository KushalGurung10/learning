const nodemailer = require('nodemailer');
require('dotenv').config();
const user= process.env.user

const transporter = nodemailer.createTransport(
    {
        secure: true,
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: `${user}`,
            pass: `${process.env.password}`
        }




    }

)

function sendMail(to,sub,msg){
  transporter.sendMail({
    from: 'kushalgurung060@gmail.com',
    to: to,
    subject: sub,
    text: msg, // plain‑text body
    html: `<b>${msg}</b>`, // HTML body
  },(err,info) =>{
    if(err){
        return console.log('error occured:', err);
    }
    console.log("Message sent:", info.messageId);
  });

  
}

sendMail('kushalgurung060@gmail.com','sick leave','tauko hang bhayo');