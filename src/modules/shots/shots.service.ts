import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shot } from './entities/shot.entity';
import { CreateShotDto } from './dto/create-shot.dto';
import { User } from '../users/entities/user.entity';

@Injectable()
export class ShotsService {
  constructor(
    @InjectRepository(Shot)
    private readonly shotRepo: Repository<Shot>,
  ) {}

  create(dto: CreateShotDto, user: User) {
    const shot = this.shotRepo.create({
      ...dto,
      createdBy: user,
    });
    return this.shotRepo.save(shot);
  }

  findAll() {
    return this.shotRepo.find({
      relations: ['createdBy'],
      order: { createdAt: 'DESC' },
    });
  }
}
