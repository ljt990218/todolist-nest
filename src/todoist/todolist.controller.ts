import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  Query
} from '@nestjs/common'
import { TodoListService } from './todolist.service'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'

@Controller('api/todolist')
export class TodoListController {
  constructor(private readonly todoistService: TodoListService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto, @Request() req) {
    return this.todoistService.create(req.user.user_id, createTodoDto)
  }

  @Get()
  async findAll(
    @Query('page') page: number = 1,
    @Query('pageSize') pageSize: number = 10,
    @Request() req
  ) {
    return this.todoistService.findAll(req.user.user_id, page, pageSize)
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
