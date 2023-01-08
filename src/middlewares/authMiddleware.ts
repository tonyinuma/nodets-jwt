import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface IPayload {
    id: string,
    iat: number,
    exp: number
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('auth-token');
    if (!token) return res.status(400).json('Access Denied');
    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY || 'string_token') as IPayload;
    req.body.userId = payload.id;
    next();
}