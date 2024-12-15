import { HttpException } from "../types/HttpException";
import { httpStatusCode } from "./Util";
import { NextFunction, Request, Response } from "express";

export default (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (error instanceof HttpException) {
    res.status(error.code).send({ message: error.message });
    return;
  }

  if (error instanceof Error && error.message) {
    if (error.message === "Method not implemented") {
      res.status(501).send({ message: httpStatusCode(501) });
      return;
    }

    res.status(500).send({ message: error.message });
    return;
  }

  res.status(500).send({ message: httpStatusCode(500) });
  return;
};
