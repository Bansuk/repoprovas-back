import { Request, Response, NextFunction } from 'express';
import * as courseService from '../service/courseService';
import CourseError from '../errors/courseError';

const getCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const courses = await courseService.retrieveCourses();
    return res.status(200).send(courses);
  } catch (error) {
    if (error instanceof CourseError)
      return res.status(404).send(error.message);
    next();
  }
};

export { getCourses };
