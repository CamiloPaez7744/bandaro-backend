import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { Lesson } from './entities/lesson.entity.ts';
import { User } from 'modules/users/entities/user.entity';

@Injectable()
export class LessonsService {
  constructor(
    @InjectRepository(Lesson)
    private readonly lessonRepo: Repository<Lesson>,
  ) {}

  create(dto: CreateLessonDto, user: User) {
    const lesson = this.lessonRepo.create({
      ...dto,
      createdBy: user,
    });
    return this.lessonRepo.save(lesson);
  }

  findAll() {
    return this.lessonRepo.find({
      order: { createdAt: 'DESC' },
    });
  }
}
