import React, { createContext, useContext, useState } from 'react';

export interface Task {
  id: number;
  name: string;
  done: boolean;
  category: string;
}

interface TaskContextType {
  categories: string[];
  tasks: Task[];
  addCategory: (name: string) => void;
  addTask: (name: string, category: string) => void;
  toggleTask: (id: number) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

  const addCategory = (name: string) => {
    if (!categories.includes(name)) {
      setCategories([...categories, name]);
    }
  };

  const addTask = (name: string, category: string) => {
    const newTask: Task = {
      id: Date.now(),
      name,
      done: false,
      category
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, done: !task.done } : task));
  };

  return (
    <TaskContext.Provider value={{ categories, tasks, addCategory, addTask, toggleTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext deve ser usado dentro de um TaskProvider");
  }
  return context;
};