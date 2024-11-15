import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem/TodoItem';
import s from './TodoList.module.css';

type Props = {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  editTodo: (editedTodo: Todo) => void;
};

export const TodoList: React.FC<Props> = ({
  todos,
  deleteTodo,
  editTodo,
}) => {
  return (
    <ul className={s.todos}>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};
