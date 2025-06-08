import { NextFunction, Request, Response } from "express";
import { getUserConfig } from "../config/user.config";
export const setConfig = (req: Request, res: Response, next: NextFunction) => {
  const { path } = req;
  const config =
    getUserConfig()[path as keyof ReturnType<typeof getUserConfig>];
  req.config = config;
  next();
};
