import { Router } from "express";
import { loggedInUser, loginUser, registerUser } from "../controllers/userController";
import { isAuthenticated } from "../middlewere/isAuthanticated";

const userRouter = Router();

userRouter.route("/registerUser").post(registerUser);
userRouter.route("/login").post(loginUser);
userRouter.route("/loggedInUser").get(isAuthenticated, loggedInUser);

export default userRouter;