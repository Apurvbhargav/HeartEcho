import express from 'express';
import dotenv from 'dotenv';
import connection from './database/db.js';
import bodyParser from 'body-parser';

 


 
 

import router from './routes/route.js';
 
const app=express();

import cors from 'cors';
app.use(cors());
app.use(bodyParser.json({extended:true}));
//app.use(bodyParser({extended:true}));

dotenv.config();
const PORT =3000;
app.listen(PORT , ()=> console.log("server  is running" ));


app.use('/' ,router);



/* const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;*/
connection();
 

 

// ADD THIS
 