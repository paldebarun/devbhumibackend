const express=require("express");
const routes=express.Router();

const {saveMessage}=require('../Hanlders/saveMessage');
const {saveContactDetails} =require('../Hanlders/saveContactDetail');


routes.post('/sendmail',saveMessage);
routes.post('/sendcontactdetails',saveContactDetails);

module.exports=routes;