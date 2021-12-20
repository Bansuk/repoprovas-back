import faker from 'faker';
import { getRepository } from 'typeorm';
import Category from '../../src/entities/CategoryEntity';
import Exam from '../../src/entities/ExamEntity';
import Class from '../../src/entities/ClassEntity';
import { createCategory } from './categoryFactory';
import { createClass } from './classFactory';

interface ExamDB {
  name: string;
  link: string;
  category: Category;
  className: Class;
}

const createExam = async () => {
  const exam: ExamDB = {
    name: faker.lorem.word(),
    link: `${faker.internet.url()}.pdf`,
    category: await createCategory(),
    className: await createClass(),
  };

  const newExam = getRepository(Exam).create(exam);
  await getRepository(Exam).save(newExam);
  return newExam;
};

export { createExam };
