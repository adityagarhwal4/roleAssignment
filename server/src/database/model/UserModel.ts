import { model } from "mongoose";
import { UserDocument } from "../entites/UserDocument";
import userSchema from "../schema/userSchema";

const UserModel = model<UserDocument>("User", userSchema);

export default UserModel;