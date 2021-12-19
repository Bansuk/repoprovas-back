import { getRepository } from 'typeorm';
import Category from '../entities/CategoryEntity';

const retrieveCategories = async () => {
  const categories = await getRepository(Category).find({ select: ['name'] });
  return categories;
};

export { retrieveCategories };
