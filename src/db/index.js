import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import express from 'express'
const app = express()
const CONNECT_DB = async ()=>{
    try{
        const CONNECTION_INSTANCE = await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`)
        app.listen(process.env.PORT,()=>{
            console.log(`\n MONGODB CONNECTED !!! HOST: ${CONNECTION_INSTANCE.connection.host}`);
            
        })
    }catch(e){
        console.log("ERROR: ",e); 
        process.exit(1);
    }

}

export default CONNECT_DB