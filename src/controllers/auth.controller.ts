import { Request, Response } from "express"
import User, { IUser } from "../models/User";
import jwt from "jsonwebtoken";

export const signup = async (req: Request, res: Response) => {

    // Saving User
    const user: IUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    const userSaved = await user.save();

    // User Token
    const userToken: string = jwt.sign({ id: userSaved._id }, process.env.JWT_SECRET_KEY || 'string_token');

    res.json(userToken);
}

export const signin = (req: Request, res: Response) => {
    res.send('signin');
}

export const profile = (req: Request, res: Response) => {
    res.send('profile');
}