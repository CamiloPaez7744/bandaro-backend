import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShotsService } from './shots.service';
import { ShotsController } from './shots.controller';
import { Shot } from './entities/shot.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shot])],
  controllers: [ShotsController],
  providers: [ShotsService],
})
export class ShotsModule {}
