import mongoose from "mongoose";

let jobschema=new mongoose.Schema({
    job:{
        type:String
    },
    jd:{
        type:String
    },
    location:{
        type:String
    },
    experience:{
        type:String
    },
    salary:{
        type:String
    }
})
const job=mongoose.model("job",jobschema)
export default job
