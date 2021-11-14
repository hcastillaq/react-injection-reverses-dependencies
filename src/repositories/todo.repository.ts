abstract class TodoRepository {
  abstract add(todo: string): void;
  abstract getAll(): string[];
  abstract delete(todo: string): void;

  protected validateExistTodo(todos: string[], todo: string): boolean {
    const tempTodos = todos.map((todo) => todo.toLocaleLowerCase());
    return tempTodos.includes(todo.toLocaleLowerCase());
  }
}

export default TodoRepository;
