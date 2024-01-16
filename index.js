const express=require('express');
const app=express();
const cors = require('cors');

require('dotenv').config();

const PORT=process.env.PORT || 3000;

app.use(express.json());

app.use(cors({
    credentials : true,
    origin:true
}));

const {databaseConnect}=require('./config/database');
databaseConnect();

const routes = require("./routes/routes");
app.use("/api/v1", routes);

app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
});
