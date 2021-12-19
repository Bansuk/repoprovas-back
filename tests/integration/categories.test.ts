import '../../src/setup';
import supertest from 'supertest';
import { getRepository } from 'typeorm';
import app, { init } from '../../src/app';
import { closeConnection } from '../utils/database';
import Category from '../../src/entities/CategoryEntity';
import { createCategory } from '../factories/categoryFactory';

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await getRepository(Category).delete({});
});

afterAll(async () => {
  await getRepository(Category).delete({});
  await closeConnection();
});

describe('GET /categories', () => {
  test('should return 404 when there are no categories available', async () => {
    const result = await supertest(app).get('/categories');

    expect(result.status).toEqual(404);
  });

  test('should return 200 when there are categories available', async () => {
    await createCategory();
    const result = await supertest(app).get('/categories');

    expect(result.body.length).toBe(1);
    expect(result.status).toEqual(200);
  });
});
