import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import{UpdateUserDto}from'./dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService{

constructor(
  @InjectRepository(User)
  private usersRepository: Repository<User>,
) {}


  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }


  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findBy({id});
  }

  remove(id: number) {
    return this.usersRepository.delete({ id });
  }

  update(id: number, UpdateUserDto: Partial<User>)  {
    this.usersRepository.update(id, UpdateUserDto);  
   return this.usersRepository.findOneBy({ id });    
 }
}
