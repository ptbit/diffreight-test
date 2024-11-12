import React, { useState } from 'react';
import cn from 'classnames';
import s from './AddTodo.module.css';

type Props = {
  addTodo: (title: string, description: string) => void;
};

export const AddTodo: React.FC<Props> = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [description, setDescription] = useState('');
  const [descriptionError, setDescriptionError] = useState(false);

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) {
      setTitleError(true);
    }
    if (!description) {
      setDescriptionError(true);
    }
    if (title && description) {
      addTodo(title, description);
      setTitle('');
      setDescription('');
      setTitleError(false);
      setDescriptionError(false);
    }
  };

  return (
    <form onSubmit={onFormSubmit} className={s.form}>
      <span>Нове завдання: </span>
      <input
        className={cn(s.input, {
          [s.error]: titleError,
        })}
        type='text'
        placeholder='Назва'
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setTitleError(false);
        }}
      />
      <input
        className={cn(s.input, {
          [s.error]: descriptionError,
        })}
        type='text'
        placeholder='Опис'
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
          setDescriptionError(false);
        }}
      />

      <button className={s.submit} type='submit'>
        Додати завдання
      </button>
    </form>
  );
};
