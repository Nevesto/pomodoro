import React, { useState } from "react";
import "./tasks.css";

function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((task, i) => i !== index));
    };

    return (
        <div className="tasks">
            <h2>Tasks</h2>
            <div className="addTask">
                <input
                    type="text"
                    className="input-task"
                    placeholder="What are you working on?"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button className="addTaskBtn" onClick={addTask}>Add</button>
            </div>
            <ul className="task-list">
                {tasks.map((task, index) => (
                    <li key={index} className="task-item">
                        {task}
                        <button 
                            className="removeTaskBtn" 
                            onClick={() => removeTask(index)}
                        >X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tasks;