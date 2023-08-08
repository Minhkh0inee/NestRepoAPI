import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileController } from './files/file/file.controller';
import { FileModule } from './files/file/file.module';
import {MulterModule} from "@nestjs/platform-express";
import {FileService} from "./files/file/file.service";

@Module({
  imports: [FileModule, MulterModule.register({dest: './uploads'})],
  controllers: [AppController, FileController],
  providers: [AppService, FileService],
})
export class AppModule {}
