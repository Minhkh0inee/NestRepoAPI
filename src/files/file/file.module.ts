import { Module } from '@nestjs/common';
import { FileController } from './file.controller';
import { FileService } from './file.service';
import { ProcessFileService } from '../../process-file/process-file/process-file.service';

@Module({
  controllers: [FileController],
  providers: [FileService, ProcessFileService],
})
export class FileModule {}
