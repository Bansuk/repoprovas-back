/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import ExamError from '../errors/examError';

export default async function (
  err: ExamError,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log('Middleware de erro: ', err);
  return res.sendStatus(500);
}
