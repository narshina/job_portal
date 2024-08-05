import mongoose from "mongoose";

let imageschema=new mongoose.Schema({
    image:{
        type:String
    }
})
const image=mongoose.model('image',imageschema)
export default image