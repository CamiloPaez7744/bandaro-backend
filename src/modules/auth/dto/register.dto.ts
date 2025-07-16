import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  MinLength,
} from 'class-validator';
import { UserRole } from 'common/enums/user-role.enum';

export class RegisterDto {
  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;

  @IsNotEmpty()
  fullName: string;

  @IsOptional()
  @IsEnum(UserRole, { message: 'role must be one of FREEMIUM | PRO | ADMIN' })
  role?: UserRole;
}
