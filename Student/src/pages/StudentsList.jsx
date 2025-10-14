import React from "react";
import Students from "./Students";

export const  StudentsList =({Students, toggleStudent, deleteStudent, filteredStudents})=> {
   return(
        <ul style = {{listStyle: "none", padding:0}}>
            {Students.map((students) => (
                <Students key = {students.id} students = {students} toggleStudent={toggleStudent} deleteStudent={deleteStudent} filteredStudents={filteredStudents} />
            ))}
        </ul>
    );
}
 

