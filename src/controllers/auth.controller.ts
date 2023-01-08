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

    user.password = await user.encryptPassword(user.password);

    const userSaved = await user.save();

    // User Token
    const userToken: string = jwt.sign({ id: userSaved._id }, process.env.JWT_SECRET_KEY || 'string_token');

    res.header('auth-token', userToken).json(userSaved);
}

export const signin = async (req: Request, res: Response) => {

    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(400).json('Email or Password is wrong');

    const passwordValid = await user.validatePassword(req.body.password);

    if (!passwordValid) return res.status(400).json('Email or Password is wrong');

    const userToken: string = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY || 'string_token', {
        expiresIn: 60 * 60 * 24
    });

    res.header('auth-token', userToken).json(user);
}

export const profile = async (req: Request, res: Response) => {
    const user = await User.findById(req.body.userId, { password: 0 });
    if (!user) return res.status(404).json('User not Found');
    res.json(user);
}