import '../../src/setup';
import supertest from 'supertest';
import { getRepository } from 'typeorm';
import app, { init } from '../../src/app';
import { closeConnection } from '../utils/database';
import Category from '../../src/entities/CategoryEntity';

beforeAll(async () => {
  await init();
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
});
