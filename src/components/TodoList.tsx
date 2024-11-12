import React from 'react';
import { Todo } from '../types/Todo';
import { TodoItem } from './TodoItem';

type Props = {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  completeTodo: (id: number) => void;
  editTodo: (editedTodo: Todo) => void;
};

export const TodoList: React.FC<Props> = ({
  todos,
  deleteTodo,
  completeTodo,
  editTodo,
}) => {
  console.log(todos);
  return (
    <div className='todos'>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};
