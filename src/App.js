import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

const App = () => {
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

  return (
    <div className='container'>
      <Header />
      <Tasks tasks = {tasks} onDelete = {deleteTask}/>
    </div>
  );
}

export default App;
