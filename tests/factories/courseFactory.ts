import faker from 'faker';
import { getRepository } from 'typeorm';
import Course from '../../src/entities/CourseEntity';

interface CourseDB {
  name: string;
  term: string;
}

const createCourse = async () => {
  const course: CourseDB = {
    name: faker.lorem.word(),
    term: faker.lorem.word(),
  };

  const newCourse = getRepository(Course).create(course);
  await getRepository(Course).save(newCourse);
  return newCourse;
};

export { createCourse };
