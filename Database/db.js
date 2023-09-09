import mongoose from "mongoose";
const URL ='mongodb://127.0.0.1:27017/e-com'
 export const Connection  =async ()=>{
    try{
      await  mongoose.connect(URL,{ useUnifiedTopology:true, useNewUrlParser:true} )
        console.log("database sucessfully connected")
    }catch(error)
    {
        console.log('error while connecting to database', error.message)
    }
}
