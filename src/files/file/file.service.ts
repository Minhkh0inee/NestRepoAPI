import {Injectable} from '@nestjs/common';

const Excel = require('exceljs');

@Injectable()
export class FileService {
    // @ts-ignore
    async readExcelFile(filePath: string): Promise<any[]> {
        try {
            const workbook = new Excel.Workbook();
            await workbook.xlsx.readFile(filePath);
            const data = [];
            workbook.eachSheet((worksheet, sheetId) => {
                const sheetData = [];
                worksheet.eachRow({includeEmpty: false}, (row) => {
                    const rowData = [];
                    row.eachCell((cell) => {
                        rowData.push(cell.value);
                    });
                    sheetData.push(rowData);
                });
                data.push({sheetName: worksheet.name, data: sheetData});
                console.log('Excel Data:', data);

                data.forEach((sheet) => {
                    console.log(`Record`, sheet)
                });

                return data;
            });
        }catch (error){
            console.error('Error reading Excel:', error);
            throw error;
        }


    }
}
