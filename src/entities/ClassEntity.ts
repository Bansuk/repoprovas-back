/* eslint-disable import/no-cycle */
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import CourseEntity from './CourseEntity';
import ProfessorEntity from './ProfessorEntity';

@Entity('class')
export default class ClassEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => CourseEntity, (course) => course.id)
  @JoinColumn({ name: 'course_id' })
  course: CourseEntity;

  @ManyToOne(() => ProfessorEntity, (professor) => professor.id)
  @JoinColumn({ name: 'professor_id' })
  professor: ProfessorEntity;
}
