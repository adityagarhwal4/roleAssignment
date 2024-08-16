import { Request, Response, NextFunction } from "express";
import { UserDocument } from "../database/entites/UserDocument";
import UserModel from "../database/model/UserModel";

export interface CustomRequest extends Request {
    user?: UserDocument;
}

export const isAuthenticated = async (
    req: CustomRequest,
    resp: Response,
    next: NextFunction
): Promise<void | Response> => {
    const { token } = req.cookies;
    if (!token) {
        return resp.status(404).json({
            success: false,
            message: "Login first.",
        });
    };
    try {
        const user = await UserModel.findById(token);
        if (user) {
            if (user) {
                req.user = user;
                next();
            } else {
                return resp.status(401).json({
                    success: false,
                    message: "Invalid token.",
                });
            }
        } else {
            return resp.status(401).json({
                success: false,
                message: "Invalid token.",
            });
        };
    } catch (error) {
        return resp.status(401).json({
            success: false,
            message: "Invalid token.",
        });
    };
};