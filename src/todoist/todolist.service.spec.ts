import { Test, TestingModule } from '@nestjs/testing'
import { TodoListService } from './todolist.service'

describe('TodoistService', () => {
  let service: TodoListService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoListService]
    }).compile()

    service = module.get<TodoListService>(TodoListService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
