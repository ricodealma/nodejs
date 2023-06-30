import express from "express";
import db from "./config/dbConnect.js"
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})

//Para rodar em atualizações constantes (Nodemon) usar comando npm run dev (processo rápido armazenado em package.json)
const app = express();
app.use(express.json())
routes(app);


export default app