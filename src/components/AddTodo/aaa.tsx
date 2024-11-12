import React, { useState } from 'react';

// Оновлений тип для задачі
export type Todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  file: File | null; // Додаємо поле для файлу
};

const TodoApp = () => {
  // Стейт для збереження задач (масив типу Todo)
  const [todos, setTodos] = useState<Todo[]>([]);

  // Стейт для окремої задачі
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(false); // Статус задачі (виконано/невиконано)
  const [file, setFile] = useState<File | null>(null); // Стейт для файлу

  // Функція для обробки зміни файлу
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

  // Функція для додавання нової задачі
  const handleAddTodo = () => {
    // Створюємо нову задачу з урахуванням файлу
    const newTodo: Todo = {
      id: todos.length + 1, // Присвоюємо новий id (можна використовувати бібліотеку для генерації унікальних id)
      title,
      description,
      completed: status,
      file,
    };

    // Додаємо задачу в стейт
    setTodos([...todos, newTodo]);

    // Очищаємо поля після додавання
    setTitle('');
    setDescription('');
    setFile(null);
    setStatus(false);
  };

  return (
    <div>
      <h1>Туду-Лист</h1>
      <input
        type='text'
        placeholder='Назва задачі'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder='Опис задачі'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>
        Статус:
        <input
          type='checkbox'
          checked={status}
          onChange={() => setStatus(!status)}
        />
      </label>
      <br />
      <input type='file' onChange={handleFileChange} />

      {file && (
        <div>
          <p>Прикріплений файл: {file.name}</p>
          {/* Попередній перегляд зображення */}
          <img
            src={URL.createObjectURL(file)}
            alt='Preview'
            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
          />
        </div>
      )}

      <button onClick={handleAddTodo}>Додати задачу</button>

      <h2>Ваші задачі:</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <p>{todo.completed ? 'Виконано' : 'Невиконано'}</p>
            {todo.file && (
              <div>
                <p>Прикріплений файл: {todo.file.name}</p>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
