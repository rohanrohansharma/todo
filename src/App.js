import React from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import { useSelector } from 'react-redux';
import Todotask from './components/Todotask';

function App() {
  // Adjust the selector to correctly access the todo list
  const {Todo} = useSelector( (state)=> state);


  return (
    <div className='wrapper'>
      <h1 className='title'>TODO APP</h1>
      <TodoInput />
      
        {Todo.map((listItem, i) => (
          <Todotask key={i} task={listItem} itemIndex={i} />
        ))
      }
    </div>
  );
}

export default App;