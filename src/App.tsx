import React from 'react';
import './App.css';
import { TodoApp } from './components/TodoApp';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>Менеджер завдань</header>
      <main>
        <TodoApp />
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
