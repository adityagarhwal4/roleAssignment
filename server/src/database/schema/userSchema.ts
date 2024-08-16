
import { Schema } from "mongoose";
import { UserDocument } from "../entites/UserDocument";

const userSchema = new Schema<UserDocument>(
    {
        username: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

export default userSchema;
