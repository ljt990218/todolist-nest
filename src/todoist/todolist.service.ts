import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'
import { TodoList } from './entities/todolist.entity'

@Injectable()
export class TodoListService {
  constructor(
    @InjectRepository(TodoList)
    private readonly todoRepository: Repository<TodoList>
  ) {}

  async create(createTodoDto: CreateTodoDto) {
    const newTodo = this.todoRepository.create(createTodoDto)
    return await this.todoRepository.save(newTodo)
  }

  async findAll(userId: number) {
    const [todos, count] = await this.todoRepository.findAndCount({
      where: { userId: userId }
    })
    return {
      todos,
      count
    }
  }

  async findAllByUserId(userId: number) {
    const [todos, count] = await this.todoRepository.findAndCount({
      where: { userId: userId }
    })
    return {
      todos,
      count
    }
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
