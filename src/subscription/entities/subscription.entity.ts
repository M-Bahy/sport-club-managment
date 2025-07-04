import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  Unique,
} from 'typeorm';
import { Member } from '../../member/entities/member.entity';
import { Sport } from '../../sport/entities/sport.entity';
import { SubscriptionType } from '../enums/subscription-type.enum';

@Entity('subscriptions')
@Unique(['memberId', 'sportId']) // Ensures one subscription per member per sport
export class Subscription {
  @Column('uuid')
  memberId: string; // A Database-Level Constraint was added in supabase to cascade on update/delete

  @Column('uuid')
  sportId: string; // A Database-Level Constraint was added in supabase to cascade on update/delete

  @Column('date')
  subscriptionDate: Date;

  @Column({
    type: 'enum',
    enum: SubscriptionType,
  })
  subscriptionType: SubscriptionType;

  // Relations (useful for queries)
  @ManyToOne(() => Member)
  @JoinColumn({ name: 'memberId' })
  member: Member;

  @ManyToOne(() => Sport)
  @JoinColumn({ name: 'sportId' })
  sport: Sport;
}
