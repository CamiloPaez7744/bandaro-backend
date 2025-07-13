import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ShotLevel } from '../entities/shot.entity';

export class CreateShotDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  angleType: string;

  @IsEnum(ShotLevel)
  level: ShotLevel;

  @IsOptional()
  @IsString()
  source?: string;

  @IsOptional()
  @IsString()
  author?: string;

  @IsOptional()
  @IsString()
  videoRef?: string;
}
