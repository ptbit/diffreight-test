import React, { useState } from 'react';
import { Todo } from '../../types/Todo';
import cn from 'classnames';
import s from './TodoItem.module.css';
import { DeleteIcon } from '../icons/DeleteIcon';
import { EditIcon } from '../icons/EditIcon';

type Props = {
  todo: Todo;
  deleteTodo: (id: number) => void;
  completeTodo: (id: number) => void;
  editTodo: (editedTodo: Todo) => void;
};

export const TodoItem: React.FC<Props> = ({
  todo,
  deleteTodo,
  completeTodo,
  editTodo,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newDescription, setNewDescription] = useState(todo.description);
  const [newCompleted, setNewCompleted] = useState(todo.completed);

  const editHandler = () => {
    if (editMode) {
      editTodo({
        id: todo.id,
        title: newTitle,
        description: newDescription,
        completed: newCompleted,
      });
    }
    setEditMode((prev) => !prev);
  };
  todo.file && console.log('-->', todo.file);
  return (
    <li
      className={cn([s.todoItem], {
        completed: todo.completed,
      })}
    >
      <div className={s.content}>
        {editMode ? (
          <>
            <div className={s.row}>
              <span className={s.rowTitle}>Назва: </span>
              <input
                className={cn(s.input, {
                  // [s.error]: descriptionError,
                })}
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </div>
            <div className={s.row}>
              <span className={s.rowTitle}>Опис: </span>
              <input
                className={cn(s.input, {
                  // [s.error]: descriptionError,
                })}
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
            </div>
            <div className={s.row}>
              <span className={s.rowTitle}>Виконання: </span>
              <input
                className={s.checkbox}
                type='checkbox'
                defaultChecked={newCompleted}
                onClick={() => {
                  setNewCompleted((prev) => !prev);
                }}
              />
            </div>
          </>
        ) : (
          <>
            <div className={s.row}>
              <span className={s.rowTitle}>Назва: </span>
              <span>{todo.title}</span>
            </div>

            <div className={s.row}>
              <span className={s.rowTitle}>Опис: </span>
              <span>{todo.description}</span>
            </div>

            <div className={s.row}>
              <span className={s.rowTitle}>Виконання: </span>
              <span>{todo.completed ? 'Так' : 'Ні'}</span>
            </div>
            {todo.file && (
              <div>
                <img
                  src={URL.createObjectURL(todo.file)}
                  alt='Preview'
                  style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                  }}
                />
              </div>
            )}
          </>
        )}
      </div>
      <div className={s.buttons}>
        <button className={s.button} onClick={editHandler}>
          <EditIcon active={editMode} />
        </button>
        <button
          className={s.button}
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          <DeleteIcon />
        </button>
      </div>
    </li>
  );
};
