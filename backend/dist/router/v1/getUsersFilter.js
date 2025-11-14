import { Router } from "express";
import { User } from "../../schema/userSchema.js";
const getUserFilters = Router();
getUserFilters.get("/bulk", async function (req, res) {
    const filter = req.query.filter || "";
    try {
        const filterUsers = await User.find({
            $or: [
                {
                    userName: {
                        "$regex": filter
                    }
                },
                {
                    email: {
                        "$regex": filter
                    }
                }
            ]
        });
        res.json({
            user: filterUsers.map(user => ({
                userName: user.userName,
                email: user.email,
                _id: user._id
            }))
        });
    }
    catch {
        res.status(404).json({ message: "Filter user function not working" });
    }
});
//# sourceMappingURL=getUsersFilter.js.map