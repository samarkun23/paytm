import { mongoDB_Connect } from "./db.js";
import express from 'express'
import dotenv from 'dotenv'

dotenv.config();

const app = express();

const PORT = process.env.PORT

try {
    mongoDB_Connect()
    .then(() => app.listen(PORT, () => console.log(`Server is running on ${PORT}`))) 
} catch (error) {
    console.log(` Error while connecting with mongodb ${error}`)    
}




