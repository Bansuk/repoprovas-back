import { Router } from 'express';
import { newExam, getExamsByProfessor } from '../controllers/examController';
import { getCategories } from '../controllers/categoryController';
import { getProfessors } from '../controllers/professorController';
import { getCourses } from '../controllers/courseController';

const router = Router();

router.post('/exam', newExam);
router.get('/categories', getCategories);
router.get('/professors', getProfessors);
router.get('/courses', getCourses);
router.get('/exams/professor/:id', getExamsByProfessor);

export default router;
