import './setup';

import express from 'express';
import cors from 'cors';
import 'reflect-metadata';

import connectDatabase from './database';
import examRouter from './routers/examRouter';
import serverMiddlewareError from './middlewares/serverMiddlewareError';

const app = express();

app.use(cors());
app.use(express.json());

app.use(examRouter);

app.use(serverMiddlewareError);

export async function init() {
  await connectDatabase();
}

export default app;
