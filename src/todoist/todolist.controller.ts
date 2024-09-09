import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request
} from '@nestjs/common'
import { TodoListService } from './todolist.service'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'

@Controller('api/todolist')
export class TodoListController {
  constructor(private readonly todoistService: TodoListService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoistService.create(createTodoDto)
  }

  @Get()
  async findAll(@Request() req) {
    const user = req.user
    return this.todoistService.findAll(user.user_id)
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
