import { NextFunction, Request, Response } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  console.log('Making a request to ', req.method, ' ', req.originalUrl);
  next();
};
