import { Router } from 'express';
import { newExam } from '../controller/examController';
import { getCategories } from '../controller/categoryController';
import { getProfessors } from '../controller/professorController';
import { getCourses } from '../controller/courseController';

const router = Router();

router.post('/exam', newExam);
router.get('/categories', getCategories);
router.get('/professors', getProfessors);
router.get('/courses', getCourses);

export default router;
