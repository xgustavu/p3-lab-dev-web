// src/components/AddTask.tsx
import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

interface AddTaskProps {
  category: string;
}

function AddTask({ category }: AddTaskProps) {
  const [name, setName] = useState('');
  const { addTask } = useTaskContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      addTask(name.trim(), category);
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder={`Nova tarefa em "${category}"`}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default AddTask;