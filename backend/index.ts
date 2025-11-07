import { mongoDB_Connect } from "./db.js";
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { mainRoute } from './router/v1/index.js'

dotenv.config();

const app = express();
app.use(cors);
app.use(express.json());
const PORT = process.env.PORT || 8000

try {
    mongoDB_Connect()
    .then(() => app.listen(PORT, () => console.log(`Server is running on ${PORT}`))) 
} catch (error) {
    console.log(` Error while connecting with mongodb ${error}`)    
}

app.use("/router/v1", mainRoute)




