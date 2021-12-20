import { getRepository } from 'typeorm';
import { ExamDB } from '../interfaces/exam';
import Exam from '../entities/ExamEntity';
import Category from '../entities/CategoryEntity';
import Course from '../entities/CourseEntity';
import Professor from '../entities/ProfessorEntity';
import Class from '../entities/ClassEntity';

const isLinkAPDF = (link: string) =>
  link.substring(link.length - 4).includes('.pdf');

const isLinkAlreadyInUse = async (examLink: string) => {
  const exam = await getRepository(Exam).find({ link: examLink });
  return exam.length;
};

const findCategory = async (category: string) => {
  const categoryFound = await getRepository(Category).find({ name: category });
  return categoryFound[0];
};

const findCourse = async (course: string) => {
  const courseFound = await getRepository(Course).find({ name: course });
  return courseFound[0];
};

const findProfessor = async (professorName: string) => {
  const professor = await getRepository(Professor).find({
    name: professorName,
  });
  return professor[0];
};

const findClass = async (courseId: number, professorId: number) => {
  const classFound = await getRepository(Class).find({
    where: { course: courseId, professor: professorId },
  });

  return classFound[0].id;
};

const insertExam = async (exam: ExamDB) => {
  const category = new Category();
  const className = new Class();
  className.id = exam.classId;
  category.id = exam.categoryId;

  const newExam = getRepository(Exam).create({
    name: exam.name,
    link: exam.examLink,
    category,
    className,
  });
  await getRepository(Exam).save(newExam);
  return newExam;
};

export {
  isLinkAPDF,
  isLinkAlreadyInUse,
  findCategory,
  findCourse,
  findProfessor,
  findClass,
  insertExam,
};
