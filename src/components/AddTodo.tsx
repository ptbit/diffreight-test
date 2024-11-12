import React, { useState } from 'react';
import { Todo } from '../types/Todo';

type Props = {
  // todo: Todo;
  // deleteTodo: (id: number) => void;
  // completeTodo: (id: number) => void;
  addTodo: (title:string, description: string) => void;
};

export const AddTodo: React.FC<Props> = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(title, description);
    addTodo( title, description);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type='text'
        placeholder='new title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='text'
        placeholder='new description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type='submit'>add</button>
    </form>
  );
};
