import mongoose from "mongoose";
//
const connection = mongoose.connect("mongodb://localhost:27017/personas")
    .then(db=>console.log("Db is connected"))
    .catch(error=>console.log(error))