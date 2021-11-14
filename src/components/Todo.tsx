import React, { useContext } from "react";
import styled from "styled-components";
import TodosContext from "../contexts/todos.context";

const TodoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f0f0f0;
  margin: 10px 0;
`;
type TodoProps = {
  name: string;
};
const Todo: React.FC<TodoProps> = ({ name }): JSX.Element => {
  const ctx = useContext(TodosContext);
  const handlerClick = () => {
    ctx.delete(name);
  };
  return (
    <TodoContainer>
      <span>{name}</span>
      <button onClick={handlerClick}>❌</button>
    </TodoContainer>
  );
};

export default Todo;
