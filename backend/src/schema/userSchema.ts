import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true,
        min: 5,
        max: 40
    },
    email: {
        type: String,
        require: true,
        unique: true,
        min: 7
    },
    password: {
        type: String,
        require: true,
        min: 6
    }
})

export const User = mongoose.model("User", userSchema);