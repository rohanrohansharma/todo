import React from 'react'
import { useState } from 'react'
import '../css/todoInput.css'
import { useDispatch } from 'react-redux';
import { add } from '../Redux/Slices/Todo';
function TodoInput(props) {

    const[input,setInput]=useState('');
    const dispatch =  useDispatch();
    function  handleAddTodo() {
        dispatch(add(input));
        setInput('');
      };
  return (
    <div className='todo-Container'>
      <div>
        <input type="text" className='text' placeholder="Enter the Task" value={input} onChange={(e)=>setInput(e.target.value)}></input>
      </div>
      <div>
        <button className='btn' onClick={handleAddTodo}>ADD</button>
      </div>

    </div>
  )
}

export default TodoInput;