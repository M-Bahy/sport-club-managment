import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Gender } from '../enums/gender.enum';

@Entity('members')
export class Member {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    type: 'enum',
    enum: Gender,
  })
  gender: Gender;

  @Column({
    type: 'date',
    nullable: true,
  })
  dob?: Date;

  @Column({
    type: 'uuid',
    nullable: true,
  })
  associatedMemberId?: string; // Constraint added in supabase sql editor: on update cascade and on delete set null

  // I assumed that the member's subscription date is the subscription date to a sport, this can be found in the Subscription entity

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date; // auto-updated on every update via supabase procedure
}
