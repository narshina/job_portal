import mongoose from "mongoose";

let messageschema=new mongoose.Schema({
    name:{
        type:String
    },
    message:{
        type:String
    },
    reciever:{
        type:String
    }
})
const message=mongoose.model("message",messageschema)
export default message