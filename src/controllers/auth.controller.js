import User from "../models/users"
import jwt from "jsonwebtoken"
export const singup = async(req,res)=>{
    const {username, email, password, role} = req.body
    
    const newUser = new User({
        username,
        email,
        password:await User.encryptPassword(password)
    })
    const saveUser = newUser.save();


    res.json("singup")
}
export const singin = async(req,res)=>{
    res.json("singin")
}