import React, { useState } from 'react';
import cn from 'classnames';
import s from './AddTodo.module.css';

type Props = {
  addTodo: (title: string, description: string, file: File | null) => void;
};

export const AddTodo: React.FC<Props> = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [description, setDescription] = useState('');
  const [descriptionError, setDescriptionError] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) {
      setTitleError(true);
    }
    if (!description) {
      setDescriptionError(true);
    }
    if (title && description) {
      addTodo(title, description, file);
      setTitle('');
      setDescription('');
      setTitleError(false);
      setDescriptionError(false);
      setFile(null);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;

    if (selectedFile) {
      if (selectedFile.type.startsWith('image/')) {
        setFile(selectedFile);
      } else {
        alert('Будь ласка, виберіть файл зображення');
      }
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
      <label className='file_label' htmlFor='file_input'>Додати файл: {file && file.name}</label>
      <input
        id='file_input'
        className='file_input'
        type='file'
        accept='.jpg, .jpeg, .png'
        onChange={handleFileChange}
      />

      <button className={s.submit} type='submit'>
        Додати завдання
      </button>
    </form>
  );
};
