// src/components/TaskList.tsx
import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import AddTask from './AddTask';

function TaskList() {
  const { categories, tasks, toggleTask } = useTaskContext();
  return (
    <div className="container1">
      {/* <h3>Tarefas:</h3> */}
      {categories.map(category => (
        <div className="category-container" key={category}>
          <h4>{category}</h4>
          <p>Adicionar Tarefa</p>
          <div className='input'>
            <AddTask category={category} />
          </div>
          <ul>
            {tasks
              .filter(t => t.category === category)
              .map(task => (
                <li key={task.id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={task.done}
                      onChange={() => toggleTask(task.id)}
                    />
                    {task.name} {task.name} ({task.done ? 'Concluída' : 'Pendente'})
                  </label>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TaskList;