import TodoRepository from "./todo.repository";

class TodoInMemoryRepository extends TodoRepository {
  private todos: string[] = [];

  public add(todo: string) {
    if (!this.validateExistTodo(this.todos, todo)) {
      this.todos.unshift(todo);
    }
  }

  public delete(todo: string) {
    if (this.validateExistTodo(this.todos, todo)) {
      this.todos = this.todos.filter(
        (_todo) => _todo.toLocaleLowerCase() !== todo.toLocaleLowerCase()
      );
    }
  }

  public getAll(): string[] {
    return this.todos;
  }
}

export default TodoInMemoryRepository;
