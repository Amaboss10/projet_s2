import { Film } from './entities/film.entity';
import { Injectable } from '@nestjs/common';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FilmsService {
    constructor(
        @InjectRepository(Film)
        private filmRepository: Repository<Film>
    ) { }
 
    create(createFilmDto: CreateFilmDto):Promise<CreateFilmDto>{
        return this.filmRepository.save(createFilmDto);
      }

  findAll() {
    return this.filmRepository.find();
  }

 async findOne(id: number) {
   return await this.filmRepository.findOneBy({id :id });
  }

  async update(id: number, updateFilmDto: UpdateFilmDto) {
   return await this.filmRepository.update(id, updateFilmDto);
  }

  async remove(id: number) {
   return await this.filmRepository.delete(id);
  }
}
