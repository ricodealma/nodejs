import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        idade: {type: String, required: false}
    },
    {
        versionKey: false
    }
)

const editoras = mongoose.model("editoras", editoraSchema)

export default editoras;