import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common'
import { TodoListService } from './todolist.service'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'

@Controller('api/todolist')
export class TodoListController {
  constructor(private readonly todoistService: TodoListService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoistService.create(createTodoDto)
  }

  @Get()
  findAll() {
    return this.todoistService.findAll()
  }

  @Get('user/:userId')
  findAllByUserId(@Param('userId') userId: number) {
    return this.todoistService.findAllByUserId(userId)
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
