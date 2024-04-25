import User from "../models/users"
import Role from "../models/Rol"
import jwt from "jsonwebtoken"
import config from "../config"
export const createUser = async (req, res)=>{
    const {nombre, correo,apellidos, password,telefono, rol} = req.body
    
    const newUser = new User({
        nombre,
        correo,
        apellidos,
        password:await User.encryptPassword(password),
        telefono
    })

    if (rol){
        const foundRoles = await Role.findOne({name: {$in:rol}})
        console.log(foundRoles)
        newUser.rol = foundRoles.name
    }else{
        const role = await Role.find({name:"user"})
        newUser.rol = role.name;
    }
    const savedUser = newUser.save();

    const token = jwt.sign({id: savedUser._id}, config.SECRET,{expiresIn:86400})

    res.json({message: "Usuario creado"})
}
export const getUsers = async(req, res)=>{
    const allUsers = await User.find()
    const users = []
    
    for (let i = 0; i < allUsers.length; i++){
        const user = {
            "nombre":allUsers[i].nombre,
            "apellidos":allUsers[i].apellidos,
            "correo":allUsers[i].correo,
            "telefono":allUsers[i].telefono,
            "rol":allUsers[i].rol}
        users.push(user)
        }
    
    res.json({
        users
    })
}
export const getUsersById = async(req, res)=>{
    const userById = await User.findById(req.params.userID);
    console.log(userById)
    res.json({
        "nombre":userById.nombre,
        "apellidos":userById.apellidos,
        "correo":userById.correo,
        "telefono":userById.telefono,
        "rol":userById.rol
    })
}
    
    
export const updateUser = async(req, res)=>{
    const updatedUser = await User.findByIdAndUpdate(req.params.userID, req.body, {new:true});
    res.json({message:"User updated"})

}
export const deleteUser = async(req, res)=>{
    const deletedUser = await User.findByIdAndDelete(req.params.userID);
    res.json({message:"User deleted"})
}