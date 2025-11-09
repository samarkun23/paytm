import { Router,type Response } from "express";
import { authMiddeware } from "../../middleware/authMiddeware.js";
import { User } from "../../schema/userSchema.js";
import zod from 'zod'

const updateUserInfoRouter = Router();

const updateBody = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
})


updateUserInfoRouter.put("/user", authMiddeware, async function (req: any, res: Response) {
    const { success } = updateBody.safeParse(req.body);
    if (success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    try {
        await User.updateOne(req.body, {
            id: req.userId
        })

        res.json({
            message: "update successfully"
        })
    }catch{
        res.json({
            message: "Unable to update the user."
        })
    }

})
