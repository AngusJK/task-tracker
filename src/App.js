import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

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
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
