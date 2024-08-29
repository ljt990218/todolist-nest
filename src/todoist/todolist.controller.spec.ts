import { Test, TestingModule } from '@nestjs/testing'
import { TodoListController } from './todolist.controller'
import { TodoListService } from './todolist.service'

describe('TodoistController', () => {
  let controller: TodoListController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoListController],
      providers: [TodoListService]
    }).compile()

    controller = module.get<TodoListController>(TodoListController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
