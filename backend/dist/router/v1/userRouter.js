import { Router } from 'express';
import { User } from '../../schema/userSchema.js';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { jwt_secret } from '../../config.js';
import { Account } from '../../schema/accountSchema.js';
const userRouter = Router();
userRouter.post("/signup", async function (req, res) {
    try {
        const { userName, email, password } = req.body;
        if (!userName || !email || password) {
            res.json({ message: "Provide the full credentials" });
        }
        //check the email 
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(400).json({ message: "User already exist" });
        }
        const saltRound = 10;
        const hashedPassword = bcrypt.hash(password, saltRound);
        await User.create({
            email,
            userName,
            hashedPassword
        });
        await Account.create({
            //@ts-ignore
            userId,
            balance: 1 + Math.random() * 10000
        });
        res.status(200).json({ message: "User create successfully" });
    }
    catch (error) {
        console.log("User signup failed");
        res.status(400).json({
            error: "Signup failed",
            message: error.message || "Failed in signup "
        });
    }
});
userRouter.post("/signin", async function (req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ message: "Provide email and password" });
        }
        const userExist = await User.findOne({ email });
        if (!userExist) {
            res.status(400).json({ message: "Incorrect credentials" });
        }
        const isPasswordCorrect = await bcrypt.compare(password, userExist?.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({
                message: "Password is incorrect"
            });
        }
        //@ts-ignore
        jwt.sign({ userId: userExist._id }, jwt_secret);
        res.status(200).json({ message: "Signin Successfully" });
    }
    catch {
        res.status(400).json({
            message: "Failed SignIn to the user"
        });
    }
});
export { userRouter };
//# sourceMappingURL=userRouter.js.map