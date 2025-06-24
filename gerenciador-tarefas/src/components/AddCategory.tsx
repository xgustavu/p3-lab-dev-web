import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

function AddCategory() {
  const [name, setName] = useState('');
  const { addCategory } = useTaskContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      addCategory(name.trim());
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Nova categoria" />
      <button type="submit">Adicionar Categoria</button>
    </form>
  );
}

export default AddCategory;