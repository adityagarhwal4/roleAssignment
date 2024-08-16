"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const frontendUri = process.env.FRONTEND_URI;
app.use((0, cors_1.default)({
    credentials: true,
    origin: [
        frontendUri,
    ],
}));
app.use("/api/v1/user", userRoutes_1.default);
exports.default = app;
