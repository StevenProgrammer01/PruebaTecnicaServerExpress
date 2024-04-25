import personas from "../models/personas"


export const createPersona = async (req, res)=>{
    const newPerson  = new personas({
        id:req.body.id,
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        correo: req.body.correo,
        telefono: req.body.telefono,
        rol: req.body.rol
    });
    const personSave= await newPerson.save()
    res.json(personSave);
}
export const getPersonas = async(req, res)=>{
    const people = await personas.find()
    res.json(people)
}
export const getPersonasById = async(req, res)=>{
    const persona = await personas.findById(req.params.personaID);
    res.json(persona)
}
    
    
export const updatePersona = async(req, res)=>{
    const updatePersona = await personas.findByIdAndUpdate(req.params.personaID, req.body, {new:true});
    res.json(updatePersona)

}
export const deletePersona = async(req, res)=>{
    const deletePersona = await personas.findByIdAndDelete(req.params.personaID);
    res.json(deletePersona)
}