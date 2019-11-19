import React from 'react';
import Todo from './Todo';
import FormTodos from './FormTodo';

const Todos = () => {
  return (
    <>
      <Todo todo='todo1' describ='blabla' />
      <FormTodos />
    </>
  )
};

export default Todos;