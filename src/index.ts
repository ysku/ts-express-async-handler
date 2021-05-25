import { NextFunction, Request, RequestHandler, Response } from "express";

export const asyncHandler = <P, ResBody, ReqBody, ReqQuery, Locals>(
  fn: RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>
) => {
  return (
    req: Request<P, ResBody, ReqBody, ReqQuery, Locals>,
    res: Response<ResBody, Locals>,
    next: NextFunction
  ) => Promise.resolve(fn(req, res, next)).catch(next);
};
