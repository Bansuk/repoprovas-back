import { Exam, ExamDB } from '../interfaces/exam';
import * as examServiceHelper from '../helpers/examServiceHelper';
import ExamError from '../errors/examError';

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

export { createExam };
