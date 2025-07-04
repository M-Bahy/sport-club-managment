import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Gender } from '../enums/gender.enum';

@Entity('sports')
export class Sport {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'decimal', scale: 2 })
  price: number; // A Database-Level Constraint is added in Supabase SQL Editor to ensure price is greater than 0

  @Column({
    type: 'enum',
    enum: Gender,
  })
  allowedGender: Gender;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date; // auto-updated on every update via supabase procedure
}
