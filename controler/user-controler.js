import { response } from "express";
import { User } from "../model/user-schema.js";



export const userSignup = (req,res)=>{
    try{
        const users = req.body;
        const newUser = new User(users)
        
         newUser.save();
         res.status(200).json({message:users})

    }catch(error)
    {
        response.status(500).json({message:error.message}) 
    }
}