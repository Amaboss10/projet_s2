import { Controller, Get, Post, Body, Param, Delete, Put, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('api')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('createUser')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('users')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('user/:id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(+id);
  }

  @Put('users/update/:id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    console.log(id);
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete('users/delete/:id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(+id);
  }
}
