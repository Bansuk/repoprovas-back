import './setup';

import express from 'express';
import cors from 'cors';
import 'reflect-metadata';

import connectDatabase from './database';
import examRouter from './routers/examRouter';

const app = express();

app.use(cors());
app.use(express.json());

app.use(examRouter);

export async function init() {
  await connectDatabase();
}

export default app;
