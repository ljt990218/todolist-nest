import { Module } from '@nestjs/common'
import { TodoListController } from './todolist.controller'
import { TodoListService } from './todolist.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TodoList } from './entities/todolist.entity'

@Module({
  imports: [TypeOrmModule.forFeature([TodoList])],
  controllers: [TodoListController],
  providers: [TodoListService]
})
export class TodoistModule {}
