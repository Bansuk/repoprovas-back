/* eslint-disable import/no-cycle */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('course')
export default class CourseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  term: string;
}
