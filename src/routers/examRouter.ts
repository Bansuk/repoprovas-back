import { Router } from 'express';
import { newExam } from '../controller/examController';

const router = Router();

router.post('/exam', newExam);

export default router;
