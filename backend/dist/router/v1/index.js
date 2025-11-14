import { Router } from "express";
import { userRouter } from "./userRouter.js";
import { accountRouter } from "./accountRoutes.js";
const mainRoute = Router();
mainRoute.use("/user", userRouter);
mainRoute.use("/account", accountRouter);
export { mainRoute };
//# sourceMappingURL=index.js.map