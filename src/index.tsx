import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./components/TodoApp";
import TodosProvider from "./providers/todos.provider";
import reportWebVitals from "./reportWebVitals";
import TodoInLocalStorageRepository from "./repositories/todoInLocalStorage.repository";
import TodoService from "./services/todo.service";

const repository = new TodoInLocalStorageRepository(); // or TodoInMemoryRepository
const todoService = new TodoService(repository);
ReactDOM.render(
  <React.StrictMode>
    <TodosProvider service={todoService}>
      <TodoApp />
    </TodosProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
