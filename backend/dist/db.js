import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { mongoDb_url } from './config.js';
dotenv.config();
const mongoUrl = mongoDb_url;
if (!mongoUrl) {
    throw new Error("MongoDb_Url is undefined is env variable");
}
export const mongoDB_Connect = async () => {
    mongoose.connect(mongoUrl).then(() => { console.log(`Mongodb Connected`); }).catch((error) => { console.log("Failed to connect with Mongodb", error); });
};
//# sourceMappingURL=db.js.map