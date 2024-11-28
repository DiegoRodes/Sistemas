import{Schema, model} from "mongoose";

const EsquemaReprobados = new Schema({
    name: String,
    apepat: String,
    matricula: String,
})

export const modeloReprobados = new model("Tabla de reprobados", EsquemaReprobados)