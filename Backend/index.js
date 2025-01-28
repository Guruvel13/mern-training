const express = require('express')
const path = require('path')
const mdb = require('mongoose')
const dotenv = require('dotenv')
const Signup = require('./')

dotenv.config()
mdb.connect(process.env.MONGODB_URL).then(()=>{
    console.log("MongoDB Connection Sucess")
})

.catch((err)=>{
    console.log("MongoDB Connection unSucess",err);
} )
const app = express()

app.get('/',(req,res)=>{
    res.send("Welcome to Backend Your Roller coster starts \n from now on Fastern your codebase so you can catchup of what is been taught")
})
app.get('/static',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})
app.post('/signup',(req,res)=>{
 var {firstname,lastname,username,email,password} =req.body
})
app.listen(3001,()=>{
    console.log("Server Started");

})