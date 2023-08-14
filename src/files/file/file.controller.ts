import {
  Controller,
  Post,
  Get,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileService } from './file.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('excel')
export class FileController {
  constructor(private readonly excelService: FileService) {}

  @Get('view')
  test() {
    return 'read successfully';
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadExcelFile(@UploadedFile() file) {
    const filePath = file.path;
    const data = await this.excelService.readExcelFile(filePath);
    // console.log('Service data: ' + ' ' + JSON.stringify(data));
    return { message: 'Excel file uploaded and read successfully', data };
  }
}
