import mongoose from "mongoose";

const userschema=new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:String
    },
    address:{
        type:String
    },
    qualification:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    usertype:{
        type:String
    }
})
const user=mongoose.model("user",userschema)
export default user