import { getManager } from 'typeorm';
import Professor from '../entities/ProfessorEntity';
import Exam from '../entities/ExamEntity';
import Class from '../entities/ClassEntity';
import ProfessorError from '../errors/professorError';

const retrieveProfessors = async () => {
  const professors = await getManager()
    .createQueryBuilder(Exam, 'exam')
    .select('professor.id, COUNT(professor.id), professor.name')
    .innerJoin(Class, 'class', 'exam.class_id = class.id')
    .innerJoin(Professor, 'professor', 'class.professor_id = professor.id')
    .groupBy('professor.id')
    .execute();

  if (!professors.length)
    throw new ProfessorError('There are no available professors.');
  return professors;
};

export { retrieveProfessors };
