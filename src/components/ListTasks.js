import React, { useState } from 'react'
import TaskForm from './TaskForm'
import Task from './Task'
import '../stylesheets/ListTasks.css'

const ListTasks = () => {

  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if (task.text.trim()) {
      console.log(task)
      task.text = task.text.trim();
      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
    }
  }

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className='task-list-container'>
        {
          tasks.map((task) =>
            <Task
            key={task.id}
            id={task.id}
            text={task.text}
            completed= {task.completed}
            deleteTask = {deleteTask} />
          )
        }
      </div>
    </>
  )
}

export default ListTasks