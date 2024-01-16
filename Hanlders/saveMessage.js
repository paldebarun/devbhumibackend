const Message = require('../model/message');
const nodemailer=require('nodemailer');
require('dotenv').config();


exports.saveMessage = async (req, res) => {
    try {
        
        const { email,firstName,lastName,message} = req.body; 

        const newmessage = new Message({
         lastName,
         firstName,
         email,
         message
         
     });
        const savedmessage = await newmessage.save();

        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        

        let info = await transporter.sendMail({
            from: process.env.MAIL_USER,
            to: email,
            subject: "Thank You for Your Inquiry – Dev Bhumi Ratan Herbal",
         html:`
         <div style="background-color: #ffffff; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
         <h2 style="color: #3d6c40;">AyurWell - Inquiry Response</h2>
         <p>Dear ${firstName} ${lastName},</p>
         <p>Thank you for reaching out to Dev Bhumi Ratan Herbal with your inquiry. We appreciate your interest in our Ayurvedic solutions for well-being.</p>
         <p>We have received your message and want to assure you that our team is diligently reviewing your inquiry. If your needs align with our offerings, a member of our AyurWell team will be in touch with you soon to provide further information and assistance.</p>
         <p>Should you have any immediate questions or require additional details, please don't hesitate to contact us.</p>
         <p>Thank you once again for considering Dev Bhumi Ratan Herbal as your Ayurvedic partner on your journey to wellness.</p>
         <p>Best regards,</p>
         <p style="font-weight: bold;">AyurWell Team,<br>Dev Bhumi Ratan Herbal</p>
     </div>
     
            `,
        });
       
        console.log('Message sent: %s', info.messageId);
        res.status(200).json({ success : true , message: 'Email sent successfully', messageId: info.messageId });


    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
};