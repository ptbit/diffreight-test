import React, { useState } from 'react';
import { TodoList } from './TodoList/TodoList';
import { Todo } from '../types/Todo';
import { AddTodo } from './AddTodo/AddTodo';

export const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const editTodo = (editedTodo: Todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === editedTodo.id ? editedTodo : todo))
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((oneTodo) => oneTodo.id !== id));
  };

  const addTodo = (
    newTodoTitle: string,
    newTodoDescription: string,
    file: File | null
  ) => {
    const newTodo = {
      id: todos.length + 1,
      title: newTodoTitle,
      description: newTodoDescription,
      completed: false,
      file,
    };
    setTodos((prev: Todo[]) => [...prev, newTodo]);
  };

  return (
    <div>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
};
