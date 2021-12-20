import '../../src/setup';
import supertest from 'supertest';
import { getRepository } from 'typeorm';
import app, { init } from '../../src/app';
import { closeConnection } from '../utils/database';
import Professor from '../../src/entities/ProfessorEntity';
import Exam from '../../src/entities/ExamEntity';
import Class from '../../src/entities/ClassEntity';
import Course from '../../src/entities/CourseEntity';
import { createExam } from '../factories/examFactory';

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

describe('GET /courses', () => {
  test('should return 404 when there are no courses available', async () => {
    const result = await supertest(app).get('/courses');

    expect(result.status).toEqual(404);
  });

  test('should return 200 when there are courses available', async () => {
    await createExam();
    const result = await supertest(app).get('/courses');

    expect(result.body.length).toBe(1);
    expect(result.status).toEqual(200);
  });
});
