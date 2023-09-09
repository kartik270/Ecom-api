import mongoose from "mongoose";
// used for validation for the data coming from frontend side
const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        min:5,
        max:20,
        trim:true
    },
    lastname:{
        type:String,
        required:true,
        min:5,
        max:20,
        trim:true

    },
    email:{
        type:String,
        required:true,
       unique:true,
       lowercase:true,
        trim:true

    },
    password:{
        type:String,
        required:true,
      

    },
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true,

    },
    
    phone:{
        type:String,
        required:true,
       

    }
})
export const User = mongoose.model('user',userSchema);