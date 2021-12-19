import { Router } from 'express';
import { newExam } from '../controller/examController';
import { getCategories } from '../controller/categoriesController';

const router = Router();

router.post('/exam', newExam);
router.get('/categories', getCategories);

export default router;
