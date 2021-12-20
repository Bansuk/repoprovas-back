import { Request, Response, NextFunction } from 'express';
import * as professorService from '../services/professorService';
import ProfessorError from '../errors/professorError';

const getProfessors = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const professors = await professorService.retrieveProfessors();
    return res.status(200).send(professors);
  } catch (error) {
    if (error instanceof ProfessorError)
      return res.status(404).send(error.message);
    next();
  }
};

export { getProfessors };
