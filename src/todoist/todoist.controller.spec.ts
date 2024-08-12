import { Test, TestingModule } from '@nestjs/testing'
import { TodoistController } from './todoist.controller'
import { TodoistService } from './todoist.service'

describe('TodoistController', () => {
  let controller: TodoistController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoistController],
      providers: [TodoistService]
    }).compile()

    controller = module.get<TodoistController>(TodoistController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
