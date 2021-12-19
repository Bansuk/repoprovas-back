/* eslint-disable import/no-cycle */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('course')
export default class CourseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  term: string;
}
