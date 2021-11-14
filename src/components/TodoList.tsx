import React, { useContext } from "react";
import styled from "styled-components";
import TodosContext from "../contexts/todos.context";
import Todo from "./Todo";

const Ul = styled.ul`
  list-style: none;
`;
const TodoList: React.FC = (): JSX.Element => {
  const { todos } = useContext(TodosContext);
  return (
    <Ul>
      {todos.map((todo: string, index: number) => (
        <li key={index}>
          <Todo name={todo} />
        </li>
      ))}
    </Ul>
  );
};

export default TodoList;
