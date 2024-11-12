import React from 'react';
import { Todo } from '../types/Todo';
import cn from 'classnames';

type Props = {
  todo: Todo;
  deleteTodo: (id: number) => void;
  completeTodo: (id: number) => void;
};

export const TodoItem: React.FC<Props> = ({
  todo,
  deleteTodo,
  completeTodo,
}) => {
  return (
    <div className='todoItem'>
      Номер:{` `} {todo.id}
      <br />
      Назва:{` `}
      {todo.title}
      <br />
      Опис:{` `}
      {todo.description}
      <span>
        Стан:{` `}
        {todo.completed ? (
          <span className='green'>Зроблено</span>
        ) : (
          <span className='red'>Не зроблено</span>
        )}
      </span>
      <div className='buttons'>
      <button>edit</button>
      <button
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        delete
      </button>
      </div>
      
    </div>
  );
};
