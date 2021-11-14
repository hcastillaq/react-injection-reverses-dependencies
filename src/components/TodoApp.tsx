import React from "react";
import styled from "styled-components";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Div = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;
const TodoApp = (): JSX.Element => {
  return (
    <Div>
      <TodoForm />
      <TodoList />
    </Div>
  );
};

export default TodoApp;
