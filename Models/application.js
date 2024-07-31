import mongoose from "mongoose";
import user from "./user.js";
import job from "./job.js";

let applyschema=new mongoose.Schema({
    jobex:{
        type:String
    },
    company:{
        type:String
    },
    userid:{
        type:mongoose.Types.ObjectId,
        ref:user
    },
    jobid:{
        type:mongoose.Types.ObjectId,
        ref:job
    }
})
const apply=mongoose.model('apply',applyschema)
export default apply