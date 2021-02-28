import  { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Task from './components/Task'
import AddTask from './components/AddTask'

// Functional Component 
const App = ()=> {

  // var [id,setId] = useState(3);  
  const name = 'Jot Singh'
  let admin = true;
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTaskFunction] = useState([])
  
  useEffect(() => {
    const getTasks = async () => {
      const serverTask = await fetchTasks()
      setTaskFunction(serverTask)
    }
    getTasks()
  }, [])

// Fetch Tasks from local server
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

// Fetch Single Task from local server
const fetchSingleTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()
  return data
}  

// Delete Task
const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTaskFunction(tasks.filter( (check) => check.id !== id ))
}
// Toggle Reminder
const reminder = async (id) => {
    const taskToToggle = await fetchSingleTask(id)
    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder } 
 
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateTask)
    }) 
    
  //  const data = await res.json()         // No use

    setTaskFunction(tasks.map( (check) =>  check.id === id ? { ...check, reminder: !check.reminder } : check )) 
}
// Add Task
const addTask = async (task) => {
  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST', 
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task)
  })  

  const newTask = await res.json()

  setTaskFunction([ ...tasks, newTask ])

  // const id = Math.floor(Math.random() * 10000) + 1
  // const newTask = { id, ...task }
  // console.log(newTask)
  // setTaskFunction([...tasks, newTask])  
}

  return (
    <Router>
      <div className='container'>
        <h1> Hello, {admin ? name : 'Who are you?'} </h1>
        <Header show={showAddTask} onAdd = {() => {setShowAddTask(!showAddTask)}} />
        <Route exact path='/' render={ (props) => (
          <>
            { showAddTask && <AddTask onAdd={addTask} /> }
            {tasks.length>0 ? (<Task tasks={tasks} onDelete={deleteTask} onToggle={reminder} />) : ("No Tasks here, Use ADD button to add new task")}
          </>
        )} />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
