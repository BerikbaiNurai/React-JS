import React from "react";

function Task ({task, toggleTask, deleteTask}) {
    return(
        <li style = {{display: "flex", justifyContent: "space-between", alignItems: "center", padding: 8, borderBottom: "1px solid #ccc"}}>
            <div>
                <input type = "checkbox" checked = {task.completed} onChange = {() => toggleTask(task.id)}/>
                <span style = {{marginLeft: 8, textDecoration: task.completed ? "line-through" : "none"}}>
                    {task.text}
                </span>
            </div>
            <button onClick={() => deleteTask(task.id)} style = {{background: "red", color: "white", border: "none"}}>
                Delete
            </button>
        </li>
    );
}

export default React.memo (Task);