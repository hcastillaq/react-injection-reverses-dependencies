import TodoRepository from "./todo.repository";

class TodoInLocalStorageRepository extends TodoRepository {
  private todos: string[] = [];
  private key: string = "todos";

  public constructor() {
    super();
    this.getFromLocalStorage();
  }

  private getFromLocalStorage() {
    const tempTodos = window.localStorage.getItem(this.key);
    this.todos = tempTodos === null ? [] : JSON.parse(tempTodos);
  }

  private insertToLocalStorage() {
    window.localStorage.setItem(this.key, JSON.stringify(this.todos));
  }

  public add(todo: string) {
    if (!this.validateExistTodo(this.todos, todo)) {
      this.todos.unshift(todo);
      this.insertToLocalStorage();
    }
  }

  public delete(todo: string) {
    if (this.validateExistTodo(this.todos, todo)) {
      this.todos = this.todos.filter(
        (_todo) => _todo.toLocaleLowerCase() !== todo.toLocaleLowerCase()
      );
      this.insertToLocalStorage();
    }
  }

  public getAll(): string[] {
    return this.todos;
  }
}

export default TodoInLocalStorageRepository;
