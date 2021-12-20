import faker from 'faker';
import { getRepository } from 'typeorm';
import Professor from '../../src/entities/ProfessorEntity';

interface ProfessorDB {
  name: string;
}

const createProfessor = async () => {
  const professor: ProfessorDB = {
    name: faker.name.firstName() + faker.name.lastName(),
  };

  const newProfessor = getRepository(Professor).create(professor);
  await getRepository(Professor).save(newProfessor);
  return newProfessor;
};

export { createProfessor };
