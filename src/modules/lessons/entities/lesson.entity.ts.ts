import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

export enum LessonLevel {
  BASIC = 'BASIC',
  INTERMEDIATE = 'INTERMEDIATE',
  ADVANCED = 'ADVANCED',
}

export enum LessonCategory {
  BRIDGE = 'BRIDGE',
  STROKE = 'STROKE',
  EFFECT = 'EFFECT',
  SYSTEM = 'SYSTEM',
  THEORY = 'THEORY',
}

@Entity('lessons')
export class Lesson {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'enum', enum: LessonLevel })
  level: LessonLevel;

  @Column({ type: 'enum', enum: LessonCategory })
  category: LessonCategory;

  @Column({ nullable: true })
  imageUrl: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'createdBy' })
  createdBy: User;

  @CreateDateColumn()
  createdAt: Date;
}
