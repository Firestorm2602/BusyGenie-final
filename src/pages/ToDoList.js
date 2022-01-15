import React, { useState } from 'react'
import './ToDoList.css';


function ToDoList() {

    
    const handleSubmit = event => {
        event.preventDefault();
        alert('Task Created Successfully!!!')
    }

    const [enterTask,setEnterTask] = useState(false);

    const handleEnterTask = () => {
        setEnterTask(!enterTask);
    }
    
    return (
        <div className='toDoList'>
            <div className='page-heading'>
                <h1>
                    To Do List
                </h1>
            </div>
            <div className="list">
                <div className='add-task-button'>
                    <button onClick={handleEnterTask}>
                        Add Task
                    </button>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={enterTask?"form-container-task active":"form-container-task"}>
                    <div className="header">
                        <h1>Enter Task</h1>
                    </div>
                    <div className="name">
                    <label >
                        Title
                    </label>
                    <p><input type="text" name="name" required /></p>
                    </div>
                    <div className="e-mail">
                    <label>
                        Time
                        <p><input type="time" name="time" id="taskTime"/></p>
                    </label>
                    </div>
                    <div className="message">
                    <label>
                        Description
                        <textarea placeholder='Task description here . . . '></textarea>
                    </label>
                    </div>
                    <div className="submit">
                        <input type="submit" value="DONE!!" onClick={handleEnterTask} />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ToDoList
