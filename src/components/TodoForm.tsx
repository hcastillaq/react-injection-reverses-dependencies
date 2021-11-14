import React, { SyntheticEvent, useContext, useRef } from "react";
import styled from "styled-components";
import TodosContext from "../contexts/todos.context";

const Form = styled.form`
  display: flex;
  justify-content: center;
`;
const Input = styled.input`
  padding: 10px;
  &[type="submit"] {
    cursor: pointer;
  }
`;
const TodoForm = (): JSX.Element => {
  const inputText = useRef<HTMLInputElement>(null);
  const { add } = useContext(TodosContext);
  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputText.current !== null) {
      add(inputText.current.value || "");
      inputText.current.value = "";
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        ref={inputText}
        type="text"
        name="todo"
        placeholder="Add todo"
        required
      />
      <Input type="submit" value="ADD" />
    </Form>
  );
};

export default TodoForm;
