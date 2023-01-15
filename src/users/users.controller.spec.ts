import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Users, UsersRepository } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

const request = require('jest');
const id = 1;
describe('UsersController', () => {
  let controller: UsersController;
  let usersService: UsersService;
  let usersRepository: Repository<Users>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        {
            provide: getRepositoryToken(Users),
            useValue: {
              save: jest.fn(),
              find: jest.fn(),
              create: jest.fn(),
              findOne: jest.fn()
            },
          },
          UsersRepository
    ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
    usersRepository = module.get<UsersRepository>(UsersRepository);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(usersService).toBeDefined();
    expect(usersRepository).toBeDefined();
  });

  describe('Find all Users', () => {
    it('should return an array of users', async () => {
      const data = controller.findAll();
      expect(controller.findAll()).toBe(data);
      //console.log('Test Controller : Should find all users => 200');
    });
  });
  
  describe('Find User by Id', () => {
    it('should return a user', async () => {
      const data = controller.findOne(id);
      expect(controller.findOne(id)).toStrictEqual(data);
      console.log('Test Controller : Should find one user => 200');
    });
  });

  describe('Create User', () => {
    it('should create a user', async () => {
      const mockRequest: any = {
        body: {
          firstname: 'Ok',
          lastname: 'Ok',
        },
      };

      const data = controller.create(mockRequest);
      expect(controller.create(mockRequest)).toBe(data);
      
      console.log('Test Controller : Should create user => 201');
    });
  });

  describe('Update User', () => {
    it('should update a user', async () => {
      
      const mockRequest: any = {
        body: {
          firstname: 'Nope',
          lastname: 'Nope',
        },
      };
      
      const data = controller.update(id, mockRequest);
      expect(controller.update(id, mockRequest)).toStrictEqual(data);
      console.log('Test Controller : Should update user => 200');

    });
  });
  
  describe('Delete User', () => {
    it('should delete a user', async () => {
      const data = controller.remove(id);
      expect(controller.remove(id)).toStrictEqual(data);
      console.log('Test Controller : Should delete user => 200');
    });
  });

});
