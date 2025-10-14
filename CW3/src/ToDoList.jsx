import React, {useState, useEffect} from "react";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState ("");

    const addTask = () => {
        if (newTask.trim() === "") return;
        setTasks([...tasks, newTask]);
        setNewTask("");
    };

    useEffect(() => {
        if (tasks.length > 10) {
            alert("You have more than 10 jobs to do!");
        }
    }, [tasks]);

    return (
        <div style = {{height: "100vh", width: "100vw", textAlign: "center"}}>
            <h1 style={{textAlign: "center"}}>ToDo List</h1>

            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter task"
                style = {{padding: "8px", marginRight: "10px", textAlign: "center"}}
            />

            <button onClick={addTask} style = {{padding: "8px 15px", color: "green"}}>Add Task</button>

            <ul style = {{listtyle: "none", padding: 0, marginTop: "20px"}}>
                {tasks.map((task, index) => (
                    <li key={index} style={{margon: "5px 0", borderBottom: "1px solid #ccc", textAlign: "center"}}>
                        {task}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;