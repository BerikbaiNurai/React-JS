import React from "react";
import Task from "./Task";

function TaskList ({tasks, toggleTask, deleteTask}) {
    return(
        <ul style = {{listStyle: "none", padding:0}}>
            {tasks.map((task) => (
                <Task key = {task.id} task = {task} toggleTask={toggleTask} deleteTask={deleteTask} />
            ))}
        </ul>
    );
}

export default React.memo(TaskList);