import React from 'react'
import Card from './Card'

function TaskHandler({tasks, setTasks}) {

const handleComplete = (taskid) => {
    setTasks(tasks.map((task) => {
        if(task.id === taskid){
            // console.log(`task id foudn >>> ${taskid}`)
            // console.log(task)
            return{
                ...task, completed: true
            }
        }
        return task
    }))
    
}

const handleDelete = (task) => {
    setTasks(tasks.filter(function(taski){
        return  taski !== task
    }))
}

  return (
    <div>
        {tasks.map((task) => task.completed? null : <Card key={task.id} task={task}  handleComplete={handleComplete} handleDelete={handleDelete} />)}
        {tasks.map((task) => !task.completed? null : <Card key={task.id} task={task}  handleComplete={handleComplete} handleDelete={handleDelete} />)}
    </div>
  )
}

export default TaskHandler