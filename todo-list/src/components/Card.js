import React from 'react'

function Card({task, handleComplete, handleDelete}) {
 return(
    <div>
        {task.completed ? 
            (<div className="card mt-3 w-50 mx-auto bg-secondary">
                <div className="card-body d-flex justify-content-between">
                <p className="card-text">{task.task}</p>
            </div>
            </div>) : 
            (<div className="card mt-3 w-50 mx-auto">
            <div className="card-body d-flex justify-content-between">
                <p className="card-text">{task.task}</p>
                <div>
                <button className="btn btn-success me-2" onClick={()=> handleComplete(task.id)}>
                    Complete
                </button>
                <button className="btn btn-danger" onClick={() => handleDelete(task)}>
                    Delete
                </button>
                </div>
            </div>
            </div>
            )
        }
    </div>
 )
    
}

export default Card