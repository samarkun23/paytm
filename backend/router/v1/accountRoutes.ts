import express, { type Response } from 'express'
import { Account } from '../../schema/accountSchema.js';
import { authMiddeware } from '../../middleware/authMiddeware.js';

const accountRouter = express.Router();

//get there balance 
accountRouter.get("/balance",authMiddeware, async function (req : any,res : Response) {
    const account = await Account.findOne({
        userId: req.userId
    }) 
    res.json({
        balance: account?.balance
    })
})


export {accountRouter}