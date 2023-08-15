import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { MongoRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: MongoRepository<User>) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.name = createUserDto.name;
    user.department = createUserDto.department;
    user.gender = createUserDto.gender;
    user.studentId = createUserDto.studentId;
    user.course = createUserDto.course;
    user.email = createUserDto.email;
    user.dob = createUserDto.dob;
    user.phone = createUserDto.phone;
    user.citizenId = createUserDto.citizenId;
    user.address = createUserDto.address;
    user.facebookLink = createUserDto.facebookLink;
    return this.repo.save(createUserDto);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id: id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.repo.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
