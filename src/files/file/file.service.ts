import { Injectable } from '@nestjs/common';
import { ProcessFileService } from '../../process-file/process-file/process-file.service';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Excel = require('exceljs');

@Injectable()
export class FileService {
  constructor(private processFile: ProcessFileService) {}
  async readExcelFile(filePath: string): Promise<any[]> {
    try {
      const workbook = new Excel.Workbook();
      await workbook.xlsx.readFile(filePath);
      const data = [];
      workbook.eachSheet((worksheet) => {
        const sheetData = [];
        worksheet.eachRow({ includeEmpty: false }, (row) => {
          const rowData = [];
          row.eachCell((cell) => {
            rowData.push(cell.value);
          });
          sheetData.push(rowData);
        });
        data.push({ sheetName: worksheet.name, data: sheetData });
        // console.log(JSON.stringify(data));
      });
      await this.processFile.processData(data[0].data);
      return data;
    } catch (error) {
      console.error('Error reading Excel:', error);
      throw error;
    }
  }
}
