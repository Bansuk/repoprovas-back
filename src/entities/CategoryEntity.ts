/* eslint-disable import/no-cycle */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('category')
export default class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
