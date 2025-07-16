import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { LessonLevel, LessonCategory } from '../entities/lesson.entity.ts';

export class CreateLessonDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(LessonLevel)
  level: LessonLevel;

  @IsEnum(LessonCategory)
  category: LessonCategory;

  @IsOptional()
  @IsString()
  imageUrl?: string;
}
