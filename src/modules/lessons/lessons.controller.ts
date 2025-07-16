import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { JwtAuthGuard } from 'modules/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'common/guards/roles.guard';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UserRole } from 'common/enums/user-role.enum';
import { Roles } from 'common/decorators/roles.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Post()
  @Roles(UserRole.ADMIN)
  create(@Body() dto: CreateLessonDto, @Request() req) {
    return this.lessonsService.create(dto, req.user);
  }

  @Get()
  @Roles(UserRole.FREEMIUM, UserRole.PRO, UserRole.ADMIN)
  findAll() {
    return this.lessonsService.findAll();
  }
}
