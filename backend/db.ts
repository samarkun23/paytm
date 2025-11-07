import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const mongoUrl = process.env.MONGODB_URL;

if(!mongoUrl){
    throw new Error("MongoDb_Url is undefined is env variable");
}

export const mongoDB_Connect = async () => {
    mongoose.connect(mongoUrl).then(() => {console.log(`Mongodb Connected`)}).catch((error) => {console.log("Failed to connect with Mongodb", error)})
}


