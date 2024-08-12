import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto)
  }

  findAll() {
    return this.userRepository.find()
  }

  async findOne(id: number) {
    let data = await this.userRepository.findOne({
      where: { id }
    })
    return data
  }

  async update(id: number, updateTodoDto: UpdateUserDto) {
    const todo = await this.findOne(id)
    Object.assign(todo, updateTodoDto)
    return await this.userRepository.save(todo)
  }

  remove(id: number) {
    return this.userRepository.delete(id)
  }
}
