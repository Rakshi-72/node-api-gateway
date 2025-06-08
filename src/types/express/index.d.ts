import "express";
import { configType } from "../CommonTypes";
declare global {
  namespace Express {
    interface Request {
      config?: configType;
      response?: any;
    }
  }
}
