import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common'
import { TodoistService } from './todoist.service'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'

@Controller('api/todoist')
export class TodoistController {
  constructor(private readonly todoistService: TodoistService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoistService.create(createTodoDto)
  }

  @Get()
  findAll() {
    return this.todoistService.findAll()
  }

  // 获取 user_id 的所有任务
  @Get('user/:user_id')
  findAllByUserId(@Param('user_id') user_id: number) {
    return this.todoistService.findAllByUserId(user_id)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoistService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoistService.update(+id, updateTodoDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoistService.remove(+id)
  }
}
