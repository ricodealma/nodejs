import mongoose from "mongoose"

mongoose.connect('#seu-id-mongoose');

let db = mongoose.connection;

export default db;
