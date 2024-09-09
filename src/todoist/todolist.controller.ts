import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UnauthorizedException
} from '@nestjs/common'
import { TodoListService } from './todolist.service'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'
import { JwtService } from '@nestjs/jwt'

@Controller('api/todolist')
export class TodoListController {
  constructor(
    private readonly todoistService: TodoListService,
    private readonly jwtService: JwtService
  ) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoistService.create(createTodoDto)
  }

  @Get()
  async findAll(@Request() req) {
    const token = req.headers.token

    if (!token) {
      return { code: 401, data: {}, message: 'Not logged in' }
    }

    try {
      const decoded = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET
      })
    } catch (error) {
      throw new UnauthorizedException('Forbidden')
    }

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
