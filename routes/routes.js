const express=require("express");
const routes=express.Router();

const {saveMessage}=require('../Hanlders/saveMessage');

routes.post('/sendmail',saveMessage);

module.exports=routes;