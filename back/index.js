const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
app.post('/user',(req,res)=>{
    console.log(req.body)
    let {password,nombre} = req.body;
    mongoose.connect('mongodb+srv://josealberto:XeBlVwLVShVPOUyg@cluster0.43oty.mongodb.net/azul');
    let personSchema = new mongoose.Schema({
        nombre: String,
        password: Number,
    });
      
    let Person = mongoose.model('Person', personSchema);

    Person.create({name:nombre, password:password}).then(doc=>res.status(200).json({msg:"usuario creado"}))
    .catch(erro=> res.status(500).json({msg:"internal server"}))
  

})

app.listen(4200,()=>console.log("corriendo "))