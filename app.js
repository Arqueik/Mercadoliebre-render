//iniciar con npm init -y
//npm i express
require("dotenv").config();

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
const port = process.env.PORT || 4000;
// app.get siempre recibe dos parametros (req and res)

app.get('/', (req, res) =>{
    res.sendFile(path.resolve('./views/home.html'));
})
app.get('/register', (req, res) =>{
    res.sendFile(path.resolve('./views/register.html'));
})
app.get('/login', (req, res) =>{
    res.sendFile(path.resolve('./views/login.html'));
})
app.get('/prueba', (req, res) =>{
    res.sendFile(path.resolve('./views/prueba.html'));
})
//app.listen(3030, () => {
//    console.log(('El servidor esta corriendo en el puerto 3030'));
//})

const server = app.listen(port, () => {
    console.log(`Server running on port ${port}!!!
      ______     _______ 
     /      \\___/ *     \\
    /     \\\\\\\    * *     \\
   /   /|       _    |\\   \\
  /___/ |   /| | |   | \\___\\
        |    | |_|   |        
        |            |         
        |            |          
        |____________| 
    
    `)
  })
// const express = require("express");
// const app = express()
// const path = require("path");
// //const PORT = 3008

// app.listen(3008, () =>{
//     console.log("servidor corriendo en el puerto 3008" );
// })

// app.get("/", (req, res) =>{
//     res.send("hola mundo");
// })

