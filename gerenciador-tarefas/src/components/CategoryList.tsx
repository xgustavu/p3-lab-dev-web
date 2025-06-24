import React from 'react';
import { useTaskContext } from '../context/TaskContext';

function CategoryList() {
  const { categories } = useTaskContext();
  return (
    <div className='categorias'>
      <h3>Categorias criadas:</h3>
      <div className="categoriasUl">
        <ul>
          {categories.map(cat => <li key={cat}>{cat}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default CategoryList;