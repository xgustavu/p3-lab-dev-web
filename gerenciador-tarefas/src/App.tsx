// src/App.tsx
import React from 'react';
import AddCategory from './components/AddCategory';
import CategoryList from './components/CategoryList';
import TaskList from './components/TaskList';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Gerenciador de Tarefas por Categoria</h1>
      <AddCategory />
      {/* <CategoryList /> */}
      <TaskList />
    </div>
  );
}

export default App;