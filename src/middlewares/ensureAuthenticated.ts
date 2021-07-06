import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;
  
  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(' ');

  try {
    const { sub } = verify(token, '3f905e9d392f880be3239b3b3af34389') as IPayload;

    req.user_id = sub;
    
    return next();
  } catch (err) {
    return res.status(401).end();
  }
}
