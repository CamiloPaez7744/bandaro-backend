import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { PostgresDatabaseModule } from './infrastructure/database/postgres/postgres.module';
import { MongoDatabaseModule } from './infrastructure/database/mongo/mongo.module';
import { RedisModule } from './infrastructure/redis/redis.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ShotsModule } from './modules/shots/shots.module';
import { LessonsModule } from './modules/lessons/lessons.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: `.env.${process.env.NODE_ENV ?? 'dev'}.local`,
    }),
    PostgresDatabaseModule,
    MongoDatabaseModule,
    RedisModule,
    AuthModule,
    UsersModule,
    ShotsModule,
    LessonsModule,
  ],
})
export class AppModule {}
