import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ShotsService } from './shots.service';
import { CreateShotDto } from './dto/create-shot.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { UserRole } from 'common/enums/user-role.enum';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('shots')
export class ShotsController {
  constructor(private readonly service: ShotsService) {}

  @Post()
  @Roles(UserRole.ADMIN)
  create(@Body() dto: CreateShotDto, @Request() req) {
    return this.service.create(dto, req.user);
  }

  @Get()
  @Roles(UserRole.FREEMIUM, UserRole.PRO, UserRole.ADMIN)
  findAll() {
    return this.service.findAll();
  }
}
