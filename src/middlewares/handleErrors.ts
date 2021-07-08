import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/CustomError";

export function handleErrors(error: CustomError, req: Request, res: Response, next: NextFunction) {
  if (error instanceof CustomError) {
    return res.status(error.status).json({
      error: error.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
}
