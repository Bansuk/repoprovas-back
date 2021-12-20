import { getManager } from 'typeorm';
import Exam from '../entities/ExamEntity';
import Class from '../entities/ClassEntity';
import CourseError from '../errors/courseError';
import Course from '../entities/CourseEntity';

const retrieveCourses = async () => {
  const courses = await getManager()
    .createQueryBuilder(Exam, 'exam')
    .select('course.id, COUNT(course.id), course.name')
    .innerJoin(Class, 'class', 'exam.class_id = class.id')
    .innerJoin(Course, 'course', 'class.course = course.id')
    .groupBy('course.id')
    .execute();

  if (!courses.length) throw new CourseError('There are no available courses.');
  return courses;
};

export { retrieveCourses };
