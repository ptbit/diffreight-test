import { Todo } from '../types/Todo';

export const initialState: Todo[] = [
  {
    id: 1,
    title: 'todo 1',
    description: 'desc 1',
    completed: false,
    file: null,
  }, // Без файлу
  {
    id: 2,
    title: 'todo 2',
    description: 'desc 2',
    completed: false,
    file: new File(['image data'], 'image1.jpg', { type: 'image/jpeg' }), // Приклад доданого файлу
  },
  {
    id: 3,
    title: 'todo 3',
    description: 'desc 3',
    completed: true,
    file: null,
    // file: new File(['image data'], 'image2.jpg', { type: 'image/jpeg' }), // Інший файл
  },
  {
    id: 4,
    title: 'todo 4',
    description: 'desc 4',
    completed: false,
    file: null,
  }, // Без файлу
];
