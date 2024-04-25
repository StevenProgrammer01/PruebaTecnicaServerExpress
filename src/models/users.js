import {Schema,model}from "mongoose"
import bcrypt from "bcryptjs"
const userSchema = Schema({
    nombre:{
        type:String,
        required:true,
        unique:true
    },
    apellidos:{type:String},
    correo:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    telefono:{type:String},
    rol:{ 
        ref:"Role",
        type:String
    }},{
    timestamps:true,
    versionKey:false
})

userSchema.statics.encryptPassword=async(password)=>{
    const salt=await bcrypt.genSalt(10)
    return await bcrypt.hash(password,salt)
}

userSchema.statics.comparePasswords=async(password, receivedPassword)=>{
    return await bcrypt.compare(password, receivedPassword)
}

export default model("User", userSchema);