import Role from "../models/Rol"

export const createRoles = async()=>{
    try {
        const count = await Role.estimatedDocumentCount()
        if(count>0)return;
        const values = await Promise.all([
            new Role({name:"general"}).save(),
            new Role({name:"admin"}).save()])
    
        console.log("Roles created")
    } catch (error) {
        console.log(error)
        
    }
}