"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const registerUser = (req, res) => {
    return res.status(201).json({
        success: true,
        message: "User register successfully."
    });
};
exports.registerUser = registerUser;
