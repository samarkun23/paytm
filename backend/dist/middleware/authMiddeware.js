import { jwt_secret } from "../config.js";
import jwt, {} from 'jsonwebtoken';
export const authMiddeware = (req, res, next) => {
    const authHandler = req.headers.authorization;
    if (!authHandler || !authHandler.startsWith('Bearer')) {
        res.status(400).json({ message: "Token is not provided" });
    }
    const token = authHandler?.split(' ')[1];
    try {
        const decoded = jwt.verify(token, jwt_secret);
        if (decoded.userId) {
            //@ts-ignore
            req.userId = decoded.userId;
            next();
        }
    }
    catch (error) {
        res.status(403).json({});
    }
};
//# sourceMappingURL=authMiddeware.js.map