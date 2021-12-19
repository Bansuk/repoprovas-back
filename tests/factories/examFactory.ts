import faker from 'faker';
import { getRepository } from 'typeorm';
import Category from '../../src/entities/CategoryEntity';

const NUM_CATEGORIES = 4;

const createExam = () => {
  const exam = {
    name: faker.lorem.word,
    category: getRandomCategory(),
    course,
    professor,
    examLink: faker.internet.url,
  };
};

const getRandomCategory = async () => {
  const randomNumber = Math.floor(Math.random() * NUM_CATEGORIES);
  const category = await getRepository(Category).findOne(randomNumber);
  return category.name;
};
