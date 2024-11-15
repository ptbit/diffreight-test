import React from 'react';
import './App.css';
import { TodoApp } from './components/TodoApp';

function App() {
  return (
    <div className='App'>
      <header>Менеджер завдань</header>
      <main>
        <TodoApp />
      </main>
      <footer>
        Тестове завдання для DiFFreight LLC - {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
