import { NextFunction, Request, Response, Router } from "express";
import { POST } from "../adapot/adopter";
import { userPaths } from "../constants/paths";

export const userRouter = Router();

userRouter.post(
  userPaths.SIGNUP,
  (req: Request, res: Response, next: NextFunction) => {
    console.log("request came here baba");
    next();
  },
  POST,
  (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
      message: "User signup route is working",
      data: req.response,
    });
  }
);
