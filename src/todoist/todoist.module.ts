import { Module } from '@nestjs/common'
import { TodoistController } from './todoist.controller'
import { TodoistService } from './todoist.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Todoist } from './entities/todoist.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Todoist])],
  controllers: [TodoistController],
  providers: [TodoistService]
})
export class TodoistModule {}
