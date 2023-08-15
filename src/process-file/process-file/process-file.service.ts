import { Injectable } from '@nestjs/common';

import { User } from '../../users/entities/user.entity';
import { UsersService } from '../../users/users.service';

@Injectable()
export class ProcessFileService {
  constructor(private userService: UsersService
  ) {}
  async processData(data: any[]): Promise<any> {
    try {
      for (let i = 1; i < data.length; i++) {
        const row = data[i];
        const obj: User = {
          id: row[0],
          name: row[1], //name
          department: row[2], //department
          gender: row[3], //gender
          studentId: row[4], //studentId
          course: row[5], //classof
          email: row[6], //email
          dob: row[7], //dob
          phone: row[8], //phone
          citizenId: row[9], //citizenId
          address: row[10], //address
          facebookLink: row[11], //facebooklink
        };
        await this.userService.create(obj);
        console.log(obj);
      }
    } catch (error) {
      console.error('Error processing data:', error);
      throw error;
    }
  }
}

// class User {
//   name: string;
//   department: string;
//   gender: string;
//   MSSV: string;
//   course: string;
//   email: string;
//   dob: string;
//   phone: string;
//   id: string;
//   address: string;
//   facebookLink: string;
//
//   constructor(
//     name,
//     department,
//     gender,
//     MSSV,
//     course,
//     email,
//     dob,
//     phone,
//     id,
//     address,
//     facebookLink,
//   ) {
//     this.name = name;
//     this.department = department;
//     this.gender = gender;
//     this.MSSV = MSSV;
//     this.course = course;
//     this.email = email;
//     this.dob = dob;
//     this.phone = phone;
//     this.id = id;
//     this.address = address;
//     this.facebookLink = facebookLink;
//   }
// }
