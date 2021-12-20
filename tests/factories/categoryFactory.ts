import faker from 'faker';
import { getRepository } from 'typeorm';
import Category from '../../src/entities/CategoryEntity';

interface CategoryDB {
  name: string;
}

const createCategory = async () => {
  const category: CategoryDB = { name: faker.lorem.word() };

  const newCategory = getRepository(Category).create(category);
  await getRepository(Category).save(newCategory);
  return newCategory;
};

export { createCategory };
