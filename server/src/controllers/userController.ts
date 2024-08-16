import { Request, Response } from "express"
import UserModel from "../database/model/UserModel";
import { sendCookie } from "../utils/sendCookie";
import { CustomRequest } from "../middlewere/isAuthanticated";

export const registerUser = async (req: Request, res: Response) => {

    const { username, password, role }: {
        username: string;
        password: string;
        role: string;
    } = req.body;

    if (!username || !password || !role) {
        return res.status(404).json({
            success: false,
            message: "All Fields are requied"
        })
    }

    try {
        await UserModel.create({
            username,
            password,
            role
        })

        return res.status(201).json({
            success: true,
            message: "User register successfully."
        });
    } catch (error: any) {
        console.log(error);
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }

}

export const loginUser = async (req: Request, res: Response) => {

    const { username, password }: {
        username: string;
        password: string;
        role: string;
    } = req.body;

    if (!username || !password) {
        return res.status(404).json({
            success: false,
            message: "All Fields are requied"
        })
    }


    try {
        const user = await UserModel.findOne({ username: username });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User Not Found"
            })
        }

        if (user.password !== password) {
            return res.status(404).json({
                success: false,
                message: "Invalid username or password."
            })
        }

        sendCookie(res, user, "Login successfully.", 200);
        return res.status(201).json({
            success: true,
            message: "User register successfully."
        });
    } catch (error: any) {
        console.log(error);
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }

}

export const loggedInUser = async (req: CustomRequest, res: Response) => {
    try {
        const user = req.user;
        return res.status(200).json({
            success: true,
            message: "logged in user data.",
            user
        });
    } catch (error: any) {
        console.log(error);
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }

}