import { NextFunction, Request, Response, Router } from "express";

const productRouter = Router();

productRouter.get(
  "/getProducts",
  (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
      message: "Product route is working",
    });
  }
);

export { productRouter };
