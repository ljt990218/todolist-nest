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

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto)
    return await this.userRepository.save(user)
  }

  async findByAccount(account: string): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { account } })
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
    const user = await this.findOne(id)
    Object.assign(user, updateTodoDto)
    return await this.userRepository.save(user)
  }

  remove(id: number) {
    return this.userRepository.delete(id)
  }
}
