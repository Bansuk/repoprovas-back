import { Request, Response, NextFunction } from 'express';
import { isExamInputValid } from '../validations/examValidation';
import * as examService from '../service/examService';
import ExamError from '../errors/examError';
import { Exam } from '../interfaces/exam';

const newExam = async (req: Request, res: Response, next: NextFunction) => {
  const exam: Exam = req.body;

  if (!isExamInputValid({ name: exam.name, examLink: exam.examLink }))
    return res.sendStatus(400);

  try {
    await examService.createExam(exam);
    return res.sendStatus(201);
  } catch (error) {
    if (error instanceof ExamError) return res.status(404).send(error.message);
    next();
  }
};

export { newExam };
