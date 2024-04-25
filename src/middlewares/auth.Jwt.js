import jwt from "jsonwebtoken"
import config from "../config"
import User from "../models/users"
import Role from "../models/Rol"
export const verifyToken = async(req, res, next)=>{
    try {
        const token = req.headers["x-access-token"]

        if (!token) return res.status(403).json({message:"No token provided"})
        
        const decoded = jwt.verify(token, config.SECRET)
        req.userId = decoded.id
        console.log(decoded)
        const user = await User.findById(req.userId,{password:0})

        if(!user) return res.status(404).json({message:"No user provided"})

    next()
    } catch (error) {
        return res.status(401).json({message:"Unauthorized"})
        
    }
    
}

export const isAdmin= async(req, res, next)=>{
    try {
        const user = await User.findById(req.userId)
        console.log(user)
        const roles = await Role.find({name:{$in:user.rol}})
        //console.log(roles[0].name)
        if (roles[0].name === "admin"){
            console.log("Success")
            next();
        }else{
            return res.status(401).json({message:"Unauthorized"})}
    } catch (error) {
        return res.status(401).json({message:"Unauthorized"})
        
    }
}