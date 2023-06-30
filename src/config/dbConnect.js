import mongoose from "mongoose"

mongoose.connect('mongodb+srv://fael9339:gCxWpHbY9E2TPGPU@cluster0.wzqzlye.mongodb.net/test');

let db = mongoose.connection;

export default db;