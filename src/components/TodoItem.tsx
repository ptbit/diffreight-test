import React, { useState } from 'react';
import { Todo } from '../types/Todo';
import cn from 'classnames';
import { spawn } from 'child_process';

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

  return (
    <div
      className={cn('todoItem', {
        completed: todo.completed,
      })}
    >
      <div className='content'>
        {editMode ? (
          <div>
            <span>Назва завдання:</span>
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <br />
            <span>Опис завдання:</span>
            <input
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
            <br />
            <span>Виконання:</span>
            <input
              type='checkbox'
              defaultChecked={newCompleted}
              onClick={() => {
                setNewCompleted((prev) => !prev);
              }}
            />
          </div>
        ) : (
          <div>
            <span>Назва завдання:</span>
            <span>{todo.title}</span>
            <br />
            <span>Опис завдання:</span>
            <span>{todo.description}</span>
            <br />
            <span>Виконання:</span>
            {todo.completed ? <span>yes</span> : <span>no</span>}
          </div>
        )}
      </div>
      <div className='buttons'>
        <button onClick={editHandler}>edit</button>
        <button
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};
