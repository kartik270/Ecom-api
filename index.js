import express from 'express';
import { Connection } from './Database/db.js';
import { Defaultdata } from './default.js';
import { router } from './routes/route.js';
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express();
app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use('/',router)
Connection();

app .listen(8000,()=>{console.log('api working')})


Defaultdata();



































// import express from 'express'
// import mongoose from 'mongoose'
// const app = express();
// const Conectdb = async()=>{

//     mongoose.connect('mongodb://127.0.0.1:27017/e-com');
   
//     const productSchema = mongoose.Schema({});
//     const product = mongoose.model('product',productSchema)
//      const data = await product.find()
//     console.log(data);
// }
// Conectdb();

// app .listen(8000,()=>{console.log('api working')})