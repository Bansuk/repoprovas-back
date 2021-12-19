/* eslint-disable import/no-cycle */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Category from './CategoryEntity';
import ClassEntity from './ClassEntity';

@Entity('exam')
export default class ExamEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  link: string;

  @ManyToOne(() => Category, (category) => category.id)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @ManyToOne(() => ClassEntity, (className) => className.id)
  @JoinColumn({ name: 'class_id' })
  className: ClassEntity;
}
