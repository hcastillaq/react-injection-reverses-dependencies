import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoService from "../services/todo.service";
import TodoApp from "../components/TodoApp";
import TodosProvider from "../providers/todos.provider";
import TodoInMemoryRepository from "../repositories/todoInMemory.repository";

const renderApp = (service: TodoService) => {
  return render(
    <TodosProvider service={service}>
      <TodoApp />
    </TodosProvider>
  );
};

test("should add todo in todo app", () => {
  const repository = new TodoInMemoryRepository();
  const service = new TodoService(repository);
  const { container } = renderApp(service);
  const textInput = screen.getByPlaceholderText(/add todo/i);
  const button = container.querySelectorAll("input[type=submit]")[0];
  const todo = "test me";
  fireEvent.change(textInput, { target: { value: todo } });
  fireEvent.click(button);
  expect(screen.getByText(todo)).toBeInTheDocument();
});
