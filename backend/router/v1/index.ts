import { Router } from "express"
import { userRouter } from "./userRouter.js";

const mainRoute = Router();

mainRoute.use("/user", userRouter);

export { mainRoute }