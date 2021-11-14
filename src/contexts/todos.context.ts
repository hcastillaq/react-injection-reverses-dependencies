import { createContext } from "react";

type TypeTodosContext = {
  todos: string[];
  add: (todo: string) => void;
  delete: (todo: string) => void;
};

const InitialTodosContext: TypeTodosContext = {
  todos: ["one todo", "two todo"],
  add: () => {},
  delete: () => {},
};

const TodosContext = createContext<TypeTodosContext>(InitialTodosContext);

export default TodosContext;
