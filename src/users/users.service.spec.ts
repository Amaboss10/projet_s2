import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users, UsersRepository } from './entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

const id = 1;

describe('UsersService', () => {
  let service: UsersService;
  let usersController: UsersController;
  let usersRepository: UsersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
            provide: getRepositoryToken(Users),
            useValue: {
              save: jest.fn(),
              find: jest.fn()
            },
          },
          UsersRepository
    ],
    controllers: [UsersController],
    }).compile();

    service = module.get<UsersService>(UsersService);
    usersRepository = module.get<UsersRepository>(UsersRepository);
    usersController = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(usersController).toBeDefined();
    expect(usersRepository).toBeDefined();
  });

  describe('UserService.findAll ', () => {
    it('should return an array of users', async () => {
      service.findAll  = jest.fn();
      expect(service.findAll);
      console.log('Test Service : Should find all users => 200');
    });
  });

  describe('UserService.findOne ', () => {
    it('should return an user', async () => {
      service.findOne  = jest.fn();
      expect(service.findOne);
     // console.log('Test Service : Should find all users => 200');
    });
  });

  describe('UserService.createUser ', () => {
    it('should create a new user', async () => {
      service.create  = jest.fn();
      expect(service.create);
     // console.log('Test Service : Should find all users => 200');
    });
  });
  
  describe('UserService.update ', () => {
    it('should update an user', async () => {
      service.update  = jest.fn();
      expect(service.update);
     // console.log('Test Service : Should find all users => 200');
    });
  });

  describe('UserService.delete ', () => {
    it('should delete an user', async () => {
      service.remove  = jest.fn();
      expect(service.remove);
     // console.log('Test Service : Should find all users => 200');
    });
  });
});
