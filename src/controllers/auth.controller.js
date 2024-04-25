import User from "../models/users"
import jwt from "jsonwebtoken"
import config from "../config"

export const signin = async(req,res)=>{
    const userFound = await User.findOne({correo:req.body.correo})
    if(!userFound) return res.status(400).json({message:"User not found"})

    const matchPassword = await User.comparePasswords(req.body.password, userFound.password)

    if(!matchPassword) return res.status(401).json({token:null, message:"invalid password"})


    const token = jwt.sign({id:userFound._id}, config.SECRET,{expiresIn:86400})
    res.json({token})
    
}