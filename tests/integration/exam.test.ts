import faker from 'faker';
import '../../src/setup';
import supertest from 'supertest';
import { getRepository } from 'typeorm';
import app, { init } from '../../src/app';
import { closeConnection } from '../utils/database';
import Professor from '../../src/entities/ProfessorEntity';
import Exam from '../../src/entities/ExamEntity';
import Class from '../../src/entities/ClassEntity';
import Course from '../../src/entities/CourseEntity';
import Category from '../../src/entities/CategoryEntity';
import { createExam } from '../factories/examFactory';
import { createCategory } from '../factories/categoryFactory';
import { createClass } from '../factories/classFactory';

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await getRepository(Exam).delete({});
  await getRepository(Class).delete({});
  await getRepository(Course).delete({});
  await getRepository(Professor).delete({});
});

afterAll(async () => {
  await getRepository(Exam).delete({});
  await getRepository(Class).delete({});
  await getRepository(Course).delete({});
  await getRepository(Professor).delete({});
  await closeConnection();
});

describe('POST /exam', () => {
  test('should return 400 when provided link is not valid', async () => {
    interface ExamDB {
      name: string;
      link: string;
      category: Category;
      className: Class;
    }

    const exam: ExamDB = {
      name: faker.lorem.word(),
      link: `${faker.internet.url()}`,
      category: await createCategory(),
      className: await createClass(),
    };
    const result = await supertest(app).post('/exam').send(exam);

    expect(result.status).toEqual(400);
  });
});

describe('GET /exams by professor', () => {
  test('should return 404 when there are no exams for the provided professor', async () => {
    const result = await supertest(app).get(`/exams/professor/${1}`);

    expect(result.status).toEqual(404);
  });

  test('should return 200 when there are exams available for the provided professor', async () => {
    const exam = await createExam();
    const professorId = exam.className.professor.id;
    const result = await supertest(app).get(`/exams/professor/${professorId}`);

    expect(result.body.length).toBe(1);
    expect(result.status).toEqual(200);
  });
});

describe('GET /exams by course', () => {
  test('should return 404 when there are no exams for the provided course', async () => {
    const result = await supertest(app).get(`/exams/course/${1}`);

    expect(result.status).toEqual(404);
  });

  test('should return 200 when there are exams available for the provided course', async () => {
    const exam = await createExam();
    const courseId = exam.className.course.id;
    const result = await supertest(app).get(`/exams/course/${courseId}`);

    expect(result.body.length).toBe(1);
    expect(result.status).toEqual(200);
  });
});
