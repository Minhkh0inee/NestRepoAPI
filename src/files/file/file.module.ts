import { Module } from '@nestjs/common';
import { FileController } from './file.controller';
import { FileService } from './file.service';
import { ProcessFileService } from '../../process-file/process-file/process-file.service';
import { UsersModule } from "../../users/users.module";
import { UsersService } from "../../users/users.service";



@Module({
  imports: [UsersModule], // Make sure UsersModule is imported here
  controllers: [FileController],
  providers: [FileService, ProcessFileService, UsersService],
})
export class FileModule {}
