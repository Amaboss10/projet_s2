import { Film, FilmRepository } from './entities/film.entity';
import { Module } from '@nestjs/common';
import { FilmsService } from './films.service';
import { FilmsController } from './films.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([Film])
      ],
  controllers: [FilmsController],
  providers: [FilmsService,
    FilmRepository
]
})
export class FilmsModule {}
