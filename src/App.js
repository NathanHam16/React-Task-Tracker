import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

const App = () => {
  const [showAddTask, setShowAddTask] = useState (true)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th a5 2:30pm',
        reminder: 'true',
    }
  ])

  // Create a function to delete tasks
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
      task.id === id ? { ...task, reminder: 
      !task.reminder } : task
    ) 
  )
}

const addTask= (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

  return (
    <div className='container'>
      <Header onAdd = {() => setShowAddTask
        (!showAddTask)} showAddTask = {showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0 ? ( 
        <Tasks tasks = {tasks} 
        onDelete = {deleteTask}  
        onToggle={toggleReminder} />
      ) : (
        'No tasks to Show'
      )}
    </div>
  )
}

export default App;
