import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'
import { Todoist } from './entities/todoist.entity'

@Injectable()
export class TodoistService {
  constructor(
    @InjectRepository(Todoist)
    private readonly todoRepository: Repository<Todoist>
  ) {}

  async create(createTodoDto: CreateTodoDto) {
    const newTodo = this.todoRepository.create(createTodoDto)
    return await this.todoRepository.save(newTodo)
  }

  async findAll() {
    return await this.todoRepository.find()
  }

  async findAllByUserId(user_id: number): Promise<[Todoist[], number]> {
    const [todos, count] = await this.todoRepository.findAndCount({
      where: { userId: user_id }
    })
    return [todos, count]
  }

  async findOne(id: number) {
    let todo = await this.todoRepository.findOne({
      where: { id }
    })
    return todo
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    const todo = await this.findOne(id)
    Object.assign(todo, updateTodoDto)
    return await this.todoRepository.save(todo)
  }

  async remove(id: number) {
    const todo = await this.findOne(id)
    await this.todoRepository.remove(todo)
    return { message: `Todo with id ${id} removed` }
  }
}
