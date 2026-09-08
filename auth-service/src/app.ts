import express, { Application, NextFunction, Request, Response } from "express";

import cors from "cors";
import logger from "./config/logger";
import { HttpError } from "http-errors";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "auth server is on",
  });
});

// global error handler
app.use((err: HttpError, req: Request, res: Response, _next: NextFunction) => {
  logger.error(err.message);
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  const error = err.name || "Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    error: [
      {
        type: error,
        message: message,
        details: err.details,
        path: req.path,
        location: req.baseUrl,
      },
    ],
  });
});

export default app;
