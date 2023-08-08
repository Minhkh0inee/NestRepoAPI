import {Controller, Get, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import { AppService } from './app.service';
import {FileInterceptor} from "@nestjs/platform-express";
import { createReadStream } from 'fs';
import * as ExcelJS from 'exceljs'; // library is commonly used to work with Excel files in JavaScript

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Post('upload')
  // @UseInterceptors(FileInterceptor('file'))
  // handleUpload(@UploadedFile() file: Express.Multer.File ){
  //   console.log("file", file)
  //   return 'File upload API'
  // }

  // @Post('upload')
  // @UseInterceptors(FileInterceptor('file'))
  // async handleExcelUpload(@UploadedFile() file: Express.Multer.File ){
  //   const workbook = new ExcelJS.Workbook() //create workbook
  //   const stream = createReadStream(file.path) //creates a readable stream that allows you to read data from a file.
  //
  //   const worksheet = workbook.getWorksheet(1);
  //
  //   worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
  //
  //       const rowData = [];
  //       row.eachCell((cell) => {
  //         rowData.push(cell.value);
  //       });
  //       console.log('Record:', rowData);
  //
  //   });
  //
  //   return { message: 'File uploaded and parsed successfully' };
  // }
}
