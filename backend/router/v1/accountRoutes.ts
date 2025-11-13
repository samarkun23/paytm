import express, { type Response } from 'express'
import { Account } from '../../schema/accountSchema.js';
import { authMiddeware } from '../../middleware/authMiddeware.js';
import mongoose from 'mongoose';

const accountRouter = express.Router();

//get there balance 
accountRouter.get("/balance", authMiddeware, async function (req: any, res: Response) {
    const account = await Account.findOne({
        userId: req.userId
    })
    res.json({
        balance: account?.balance
    })
})


//endpoint for the trasfer the money 
accountRouter.post("/transfer", authMiddeware, async function (req: any, res: Response) {

    const session = await mongoose.startSession();

    session.startTransaction();

    const { ammount, to } = req.body;

    const account = await Account.findOne({
        userId: req.userid
    })

    //@ts-ignore
    if (account?.balance < ammount) {
        return res.status(400).json({
            message: "Insufficient balance"
        })
    }

    const toAccount = await Account.findOne({
        userId: to
    })

    if (!toAccount) {
        return res.status(400).json({
            message: "Invalid account"
        })
    }

    await Account.updateOne({
        userId: req.userId
    }, {
        $inc: {
            balance: -ammount
        }
    })

    await Account.updateOne({
        userId: to
    }, {
        $inc: {
            balance: ammount
        }
    })

    await session.commitTransaction();
    res.json({
        message: "transfer successful"
    })


})


export { accountRouter }