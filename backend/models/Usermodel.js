import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }

},{timestamps:true})
export const User=mongoose.model("User",UserSchema)