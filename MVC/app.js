//Siempre tiene que guardar el app librerias(imports), servidor locales (4000, 5000), conexiones a BD(mongoose)
//los console log son los testeos para saber que esta funcionando 


import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { test } from "./controllers/reprobadoscontroller.js";

dotenv.config //config es para que mande a llamar la variable de .env 
mongoose.connect(process.env.url_bd)
.then(() => {
    console.log("Funciona la bd")
})
.catch((error) => {
    console.log("No funciona la bd", error) //para que salga que tipo de error esta saliendo
})
const app = express (); //este es un servidor local, bien rapido no manches
app.use(cors()); //da seguridad al servidor 

app.listen(4000, "El servidor se esta escuchando bien, si se lavo el oido") //para saber que se esta escuchando 

test()
