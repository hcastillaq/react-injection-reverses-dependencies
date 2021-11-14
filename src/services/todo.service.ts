import TodoRepository from "../repositories/todo.repository";

class TodoService {
  private repository: TodoRepository;
  public constructor(repository: TodoRepository) {
    this.repository = repository;
  }
  public getAll(): string[] {
    return this.repository.getAll();
  }
  public add(todo: string): void {
    this.repository.add(todo);
  }
  public delete(todo: string): void {
    this.repository.delete(todo);
  }
}

export default TodoService;
