const mongoose=require('mongoose');
const nodemailer=require('nodemailer');

const Contact=new mongoose.Schema({
    firstName:{
        type:String,
        
      },
      lastName:{
        type:String,
        
      },
      email:{
        type:String
      },
      
      
      

});






module.exports=mongoose.model("Contact",Contact);