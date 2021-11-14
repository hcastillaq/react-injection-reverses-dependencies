import React, { ReactNode, useEffect, useState } from "react";
import TodosContext from "../contexts/todos.context";
import TodoService from "../services/todo.service";

type TypeTodoProvider = {
  service: TodoService;
  children?: ReactNode;
};
const TodosProvider: React.FC<TypeTodoProvider> = ({
  service,
  children,
}): JSX.Element => {
  const [todos, setTodos] = useState<string[]>([]);

  useEffect(() => {
    getAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAll = (): void => {
    setTodos([...service.getAll()]);
  };
  const add = (todo: string): void => {
    service.add(todo);
    getAll();
  };

  const _delete = (todo: string): void => {
    service.delete(todo);
    getAll();
  };

  const contextValue = {
    todos,
    add,
    delete: _delete,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
