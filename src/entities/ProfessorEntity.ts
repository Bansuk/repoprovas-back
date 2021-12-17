/* eslint-disable import/no-cycle */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('professor')
export default class ProfessorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
