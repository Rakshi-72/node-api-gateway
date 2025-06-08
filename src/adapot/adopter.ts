import axios, { AxiosError } from "axios";
import { NextFunction, Request, Response } from "express";

export const POST = async (req: Request, res: Response, next: NextFunction) => {
  const { body, config } = req;
  try {
    if (config?.url && config.url.length !== 0) {
      const response = await axios.post(
        config.baseUrl?.concat(config.url)!,
        body,
        {
          headers: { checking: "checking header" },
          params: { param1: "value1", param2: "value2" },
        }
      );

      if (response.data) req.response = response.data;
      else req.response = { message: "No data received from the API" };

      next(); // Only call next if everything is fine
    } else {
      res.status(400).json({ error: "Invalid config url" });
      // Do NOT call next()
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      const data = error.response?.data;
      console.log("data", data);

      return res
        .status(Number(data.statusCode))
        .json({ reason: error.response?.data });
    }
    return res.status(500).json({ error: "Internal Server Error" });

    // Do NOT call next()
  }
};
