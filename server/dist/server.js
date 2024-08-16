"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const connectDB_1 = require("./database/connectDB");
const port = process.env.PORT;
(0, connectDB_1.connectDB)();
app_1.default.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
