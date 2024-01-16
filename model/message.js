const mongoose=require('mongoose');
const nodemailer=require('nodemailer');

const Message=new mongoose.Schema({
    firstName:{
        type:String,
        
      },
      lastName:{
        type:String,
        
      },
      email:{
        type:String
      },
      message:{
        type:String,
        
      }
     


});






module.exports=mongoose.model("Message",Message);