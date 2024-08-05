import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import user from "./Models/user.js";
import job from "./Models/job.js";
import apply from "./Models/application.js";
import message from "./Models/message.js";
import { upload } from "./multer.js";
import image from "./Models/image.js";
mongoose.connect('mongodb://127.0.0.1:27017/job')
  .then(() => console.log('Connected!'));

const app=express()
app.use(cors())
app.use(express.json())

app.post('/register',async(req,res)=>{
    try{
        console.log(req.body)
        let newuser=new user(req.body)
        console.log(newuser,'new user');
        let response=await newuser.save()
        res.json(response)
        console.log(response)
    }
    catch(e){
        res.json(e.message)
    }
})
app.post('/login',async (req,res)=>{
    console.log(req.body);
    const {email,password}=req.body
    let users=await user.findOne({email:email,password:password})
    console.log(users);
    res.json(users)
})

app.post('/addjob',async(req,res)=>{
    try{
        console.log(req.body)
        let newjob=new job(req.body)
        console.log(newjob,'new job');
        let response=await newjob.save()
        res.json(response)
        console.log(response)
    }
    catch(e){
        res.json(e.message)
    }
})
app.post('/applyjob',async(req,res)=>{
    try{
        console.log(req.body);
        console.log(req.body);
        let newapply=new apply(req.body)
        console.log(newapply);
        let response=await newapply.save()
        res.json(response)
        console.log(response);
    }
    catch(e){
       res.json(e.message)
    }
})

app.get('/vjob',async(req,res)=>{
    let response=await job.find()
    console.log(response)
    res.json(response)
})
app.get('/vapply',async(req,res)=>{
    let applicationdetails=await apply.find()
    console.log(applicationdetails);
    let responsedata=[]
    for(let x of applicationdetails){
        let response=await user.findById(x.userid)
        let jobs=await job.findById(x.jobid)
        console.log(jobs);
        responsedata.push({
            applications:x,
            job:jobs,
            user:response

        })

    }
    console.log(responsedata);
    res.json(responsedata)
})
app.delete('/delete/:id',async(req,res)=>{
    let id=req.params.id
    let response=await job.findByIdAndDelete(id)
})
app.get('/vjobdetail/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await job.findById(id)
    console.log(response);
    res.json(response)
})
app.put('/editjob/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await job.findByIdAndUpdate(id,req.body,{new:true})
    console.log(response);
    res.json(response)
})
app.post('/send',async(req,res)=>{
    try{
        console.log(req.body);
        let newmessage=new message(req.body)
        console.log(newmessage); 
        let response=await newmessage.save()
        res.json(response)
        console.log(response);
        
    }
    catch{

    }
})
app.get('/viewmessage',async(req,res)=>{
        let response=await message.find({name:"narshina"})
        console.log(response);
        res.json(response)
        
})
app.get('/vmessage',async(req,res)=>{
    let response=await message.find({reciever:"akash"})
    console.log(response);
    res.json(response)
    
})
app.post('/addimage',upload.single('image'),async(req,res)=>{
    try{
    console.log(req.file)
    let imagepath=req.file.filename
    const newProduct = new image({...req.body,image:imagepath})
    const savedProduct = await newProduct.save();
    res.json(savedProduct)
    }
    catch(e){
        res.json(e.message)
    }
})
app.get('/vimage',async(req,res)=>{
    let response=await image.find()
    console.log(response);
    res.json(response)
    
})

app.listen(4000)