import { Injectable } from '@nestjs/common';

@Injectable()
export class ProcessFileService {
  async processData(data: any[]): Promise<any> {
    try {
      const objectsArray: User[] = [];
      for (let i = 1; i < data.length; i++) {
        const row = data[i];
        const obj = new User(
          row[1], //name
          row[2], //department
          row[3], //gender
          row[4], //studentId
          row[5], //classof
          row[6], //email
          row[7], //dob
          row[8], //phone
          row[9], //citizenId
          row[10], //address
          row[11], //facebooklink
        );
        objectsArray.push(obj);
      }
      console.log('Data from FileService', objectsArray);
    } catch (error) {
      console.error('Error processing data:', error);
      throw error;
    }
  }
}

class User {
  name: string;
  department: string;
  gender: string;
  MSSV: string;
  course: string;
  email: string;
  dob: string;
  phone: string;
  id: string;
  address: string;
  facebookLink: string;

  constructor(
    name,
    department,
    gender,
    MSSV,
    course,
    email,
    dob,
    phone,
    id,
    address,
    facebookLink,
  ) {
    this.name = name;
    this.department = department;
    this.gender = gender;
    this.MSSV = MSSV;
    this.course = course;
    this.email = email;
    this.dob = dob;
    this.phone = phone;
    this.id = id;
    this.address = address;
    this.facebookLink = facebookLink;
  }
}
