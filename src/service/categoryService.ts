import { getRepository } from 'typeorm';
import Category from '../entities/CategoryEntity';
import CategoryError from '../errors/categoryError';

const retrieveCategories = async () => {
  const categories = await getRepository(Category).find({ select: ['name'] });

  if (!categories.length)
    throw new CategoryError('There are no available categories.');
  return categories;
};

export { retrieveCategories };
