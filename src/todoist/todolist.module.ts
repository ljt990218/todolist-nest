import { Module } from '@nestjs/common'
import { TodoListController } from './todolist.controller'
import { TodoListService } from './todolist.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TodoList } from './entities/todolist.entity'
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [
    TypeOrmModule.forFeature([TodoList]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '24h' }
    })
  ],
  controllers: [TodoListController],
  providers: [TodoListService]
})
export class TodoistModule {}
