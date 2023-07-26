import React from 'react'

function InputField( {inputTask, setInputTask, tasks, setTasks})  {

    const changeInput = (e) => {
        // console.log(e.target.value)
        setInputTask(e.target.value)
    }

    const submitHandler = () => {
        const input = inputTask
        if(input === "") console.log("input is empty")
        else{
          setTasks([...tasks, {task: inputTask, completed: false, id: Math.floor(Math.random()*1000)}])
          // console.log(tasks);
        }
        setInputTask("")
    }

    const keyPressHandler = (e) => {
        if(e.key==="Enter"){
          submitHandler();
        }
    }

  return (
    <div>
        <input className='form-control-lg align-content-lg-center mt-5 rounded-3 w-50' 
        onChange={(e) => changeInput(e)} 
        type='text' placeholder='add task' value={inputTask} 
        onKeyDown={(e)=>keyPressHandler(e)}
        />
        <br />
        <button className='btn btn-primary mt-3 w-50' type='submit' onClick={() => submitHandler()}>Add Task</button>
    </div>
  )
}

export default InputField