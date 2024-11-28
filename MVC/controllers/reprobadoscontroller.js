import { modeloReprobados } from "../models/reprobadosmodel.js";

modeloReprobados.create({
    name:"Rodolfo",
    apepat: "El reno",
    matricula: "utm23090685"
})

 export const test = () =>(
    console.log("Llamando al controlador")
)