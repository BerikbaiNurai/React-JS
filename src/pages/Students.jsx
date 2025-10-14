import React from "react";

function Students ({students, toggleStudents, deleteStudents, filteredStudents}) {
    return(
        <li style = {{display: "flex", justifyContent: "space-between", alignItems: "center", padding: 8, borderBottom: "1px solid #ccc"}}>
            <div>
                <input type = "checkbox" checked = {students.completed} onChange = {() => toggleStudents(students.id)}/>
                <span style = {{marginLeft: 8, textDecoration: students.completed ? "line-through" : "none"}}>
                    {students.text}
                </span>
            </div>
            <button onClick={() => deleteStudents(students.id)} style = {{background: "red", color: "white", border: "none"}}>
                Delete
            </button>
        </li>
    );
}

export default React.memo (Students);