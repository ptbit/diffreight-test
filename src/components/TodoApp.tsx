import React, { useState } from 'react';
import { TodoList } from './TodoList/TodoList';
import { Todo } from '../types/Todo';
import { AddTodo } from './AddTodo/AddTodo';
import { initialState } from '../services/initialState';

export const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState(initialState);

  const editTodo = (editedTodo: Todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === editedTodo.id ? editedTodo : todo))
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((oneTodo) => oneTodo.id !== id));
  };

  const completeTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTodo = (newTodoTitle: string, newTodoDescription: string) => {
    const newTodo = {
      id: todos.length + 1,
      title: newTodoTitle,
      description: newTodoDescription,
      completed: false,
    };
    setTodos((prev: Todo[]) => [...prev, newTodo]);
  };

  return (
    <div>
      <AddTodo addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        editTodo={editTodo}
      />
      {/* <AddFile /> */}
    </div>
  );
};
