import faker from 'faker';
import { getRepository } from 'typeorm';
import Category from '../../src/entities/CategoryEntity';

interface CategoryDB {
  name: string;
}

const createCategory = async () => {
  const category: CategoryDB = { name: faker.lorem.word() };
  await getRepository(Category).insert(category);
};

export { createCategory };
