import { Router } from 'express';
import { newExam } from '../controller/examController';
import { getCategories } from '../controller/categoryController';
import { getProfessors } from '../controller/professorController';

const router = Router();

router.post('/exam', newExam);
router.get('/categories', getCategories);
router.get('/professors', getProfessors);

export default router;
