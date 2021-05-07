import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Doctor Appointment',
        day: 'Feb 1 at 2:30pm',
        reminder: true
      },
      {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6 at 1:30pm',
        reminder: true
      },
      {
        id: 3,
        text: 'Grocery Shopping',
        day: 'Feb 7 at 5:30pm',
        reminder: false  
      }
    ]
  )

  // Add Task
  const addTask = function(task){
    console.log(task);
  }  

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log('Deleted task with id ' + id + '.');
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    </div>
  );
}

export default App;
