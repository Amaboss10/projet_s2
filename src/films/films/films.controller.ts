import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { FilmsService } from './films.service';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';

@Controller('api')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Post('createFilm')
  create(@Body() createFilmDto: CreateFilmDto) {
    return this.filmsService.create(createFilmDto);
  }

  @Get('Films')
  findAll() {
    return this.filmsService.findAll();
  }

  @Get('Film/:id')
  findOne(@Param('id') id: number) {
    return this.filmsService.findOne(+id);
  }

  @Put('Films/update/:id')
  update(@Param('id') id: number, @Body() updateFilmDto: UpdateFilmDto) {
    console.log(id);
    return this.filmsService.update(+id, updateFilmDto);
  }

  @Delete('Films/delete/:id')
  remove(@Param('id') id: number) {
    return this.filmsService.remove(+id);
  }
}
