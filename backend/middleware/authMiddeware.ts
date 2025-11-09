import type { NextFunction, Request, Response } from "express";
import { jwt_secret } from "../config.js";
import jwt, { type JwtPayload } from 'jsonwebtoken'

interface MyJwtPayload extends JwtPayload {
  userId: string;
}

export const authMiddeware = (req : Request , res : Response, next : NextFunction) => {
    const authHandler = req.headers.authorization;

    if(!authHandler || !authHandler.startsWith('Bearer')){
        res.status(400).json({message: "Token is not provided"});
    }

    const token = authHandler?.split(' ')[1];

    try {

        const decoded = jwt.verify(token!, jwt_secret!) as MyJwtPayload;

        if(decoded.userId){
            //@ts-ignore
            req.userId = decoded.userId;
            next();
        }

    } catch (error) {
        res.status(403).json({});
    }
}










