import React, { useState } from 'react'
import '../stylesheets/TaskForm.css'
import {v4 as uuidv4} from 'uuid'

const TaskForm = (props) => {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  }

  const manejarEnvio = e => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    }
    props.onSubmit(newTask)
  }

  return (
    <form
      className='task-form'
      onSubmit={manejarEnvio}>
      <input
      className='task-input'
      type='text'
      placeholder='Write a Task'
      name='text'
      onChange={manejarCambio}
      />
      <button className='task-button'>
        Add task
      </button>
    </form>
  )
}

export default TaskForm
