import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TaskHandler from './components/TaskHandler';
import Header from './components/Header';


function App() {

  const[inputTask, setInputTask] = useState("");
  const[tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <Header />
      <InputField inputTask={inputTask} setInputTask={setInputTask} tasks={tasks} setTasks={setTasks} />
      <TaskHandler tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
