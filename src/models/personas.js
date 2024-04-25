import {Schema, model} from "mongoose"
const personasSchema = new Schema({
    id:Number,
    nombre:String,
    apellidos:String,
    correo:String,
    telefono:String,
    rol:String
},{
    timestamps:true,
    versionKey:false
})
export default model('personas',personasSchema)