import { Request, Response, NextFunction } from 'express';
import * as categoriesService from '../services/categoryService';
import CategoryError from '../errors/categoryError';

const getCategories = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const categories = await categoriesService.retrieveCategories();
    return res.status(200).send(categories);
  } catch (error) {
    if (error instanceof CategoryError)
      return res.status(404).send(error.message);
    next();
  }
};

export { getCategories };
