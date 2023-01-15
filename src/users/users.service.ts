import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>
    ) { }

  create(createUserDto: CreateUserDto):Promise<CreateUserDto> {
    return this.usersRepository.save(createUserDto);
  }

  findAll() {
    return this.usersRepository.find();
  }

  async findOne(id: number) {
    
   return await this.usersRepository.findOneBy({id :id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
   return await this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
   return await this.usersRepository.delete(id);
  }

}
