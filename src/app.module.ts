import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileController } from './files/file/file.controller';
import { FileModule } from './files/file/file.module';
import { MulterModule } from '@nestjs/platform-express';
import { FileService } from './files/file/file.service';
import { ProcessFileService } from './process-file/process-file/process-file.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://127.0.0.1:27017/fbc',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      ssl: false,
      autoLoadEntities: true,
      // Only enable this option if your application is in development,
      // otherwise use TypeORM migrations to sync entity schemas:
      // https://typeorm.io/#/migrations
      synchronize: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    FileModule,
    MulterModule.register({ dest: './uploads' }),
    UsersModule,
  ],
  controllers: [AppController, FileController],
  providers: [AppService, FileService, ProcessFileService],
})
export class AppModule {}
