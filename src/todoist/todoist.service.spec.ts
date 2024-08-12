import { Test, TestingModule } from '@nestjs/testing';
import { TodoistService } from './todoist.service';

describe('TodoistService', () => {
  let service: TodoistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoistService],
    }).compile();

    service = module.get<TodoistService>(TodoistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
