import { getRepository } from 'typeorm';
import Class from '../../src/entities/ClassEntity';
import { createCourse } from './courseFactory';
import { createProfessor } from './professorFactory';
import Course from '../../src/entities/CourseEntity';
import Professor from '../../src/entities/ProfessorEntity';

interface ClassDB {
  course: Course;
  professor: Professor;
}

const createClass = async () => {
  const className: ClassDB = {
    course: await createCourse(),
    professor: await createProfessor(),
  };

  const newClass = getRepository(Class).create(className);
  await getRepository(Class).save(newClass);
  return newClass;
};

export { createClass };
