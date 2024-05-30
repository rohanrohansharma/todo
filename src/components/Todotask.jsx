import React from 'react'
import '../css/todoTask.css'
import { useDispatch } from 'react-redux'
import { remove } from '../Redux/Slices/Todo'

function Todotask({task,itemIndex}) {
    const dispatch = useDispatch()
    function removeHandler(){
        dispatch(remove(task));
    }

  return (
    <div className='todotask'>
        
        <div className='inner-todotask'>
          {task}
        </div>
        <div className='btn-container'>
            <button className='btn-delete' onClick={removeHandler} >Delete</button>
        </div>
    </div>
  )
}

export default Todotask;