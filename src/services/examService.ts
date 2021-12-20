import { getManager } from 'typeorm';
import { Exam, ExamDB } from '../interfaces/exam';
import * as examServiceHelper from '../helpers/examServiceHelper';
import ExamError from '../errors/examError';
import Professor from '../entities/ProfessorEntity';
import ExamEntity from '../entities/ExamEntity';
import Class from '../entities/ClassEntity';
import Category from '../entities/CategoryEntity';
import Course from '../entities/CourseEntity';

const createExam = async (exam: Exam) => {
  if (!examServiceHelper.isLinkAPDF(exam.examLink))
    throw new ExamError("The provided URL doesn't redirect to a PDF file.");

  if (!examServiceHelper.isLinkAlreadyInUse(exam.examLink))
    throw new ExamError('The provided URL is already in use.');

  const category = await examServiceHelper.findCategory(exam.category);

  if (!category)
    throw new ExamError('The provided exam category is not valid.');

  const course = await examServiceHelper.findCourse(exam.course);

  if (!course) throw new ExamError('The provided course does not exist.');

  const professor = await examServiceHelper.findProfessor(exam.professor);

  if (!professor)
    throw new ExamError('The provided professor name does not exist.');

  const className = await examServiceHelper.findClass(course.id, professor.id);

  const examDB: ExamDB = {
    name: exam.name,
    categoryId: category.id,
    courseId: course.id,
    professorId: professor.id,
    classId: className,
    examLink: exam.examLink,
  };

  await examServiceHelper.insertExam(examDB);
};

const retrieveExamsByProfessor = async (id: any) => {
  const exams = await getManager()
    .createQueryBuilder(ExamEntity, 'exam')
    .select('exam.link, exam.name')
    .addSelect('category.name')
    .addSelect('course.name')
    .innerJoin(Class, 'class', 'exam.class_id = class.id')
    .innerJoin(Professor, 'professor', 'class.professor_id = professor.id')
    .innerJoin(Category, 'category', 'exam.category_id = category.id')
    .innerJoin(Course, 'course', 'class.course_id = course.id')
    .where('professor.id = :id', { id })
    .execute();

  if (!exams.length)
    throw new ExamError('There are no available exams for this professor.');
  return exams;
};

const retrieveExamsByCourse = async (id: any) => {
  const exams = await getManager()
    .createQueryBuilder(ExamEntity, 'exam')
    .select('exam.link, exam.name')
    .addSelect('category.name')
    .addSelect('professor.name')
    .innerJoin(Class, 'class', 'exam.class_id = class.id')
    .innerJoin(Professor, 'professor', 'class.professor_id = professor.id')
    .innerJoin(Category, 'category', 'exam.category_id = category.id')
    .innerJoin(Course, 'course', 'class.course_id = course.id')
    .where('course.id = :id', { id })
    .execute();

  if (!exams.length)
    throw new ExamError('There are no available exams for this course.');
  return exams;
};

export { createExam, retrieveExamsByProfessor, retrieveExamsByCourse };
