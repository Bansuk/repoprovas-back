import '../../src/setup';
import app, { init } from '../../src/app';
import { closeConnection } from '../utils/database';
import supertest from 'supertest';

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await closeConnection();
});

describe('POST /exam', () => {
  test('should return 400 when the provided URL doesn\'t redirect to an PDF file', async () => {
    const { token } = await createSession();
    const transaction = {};
    const result = await supertest(app).post('/exam').send(body);

    expect(result.status).toEqual(400);
  });