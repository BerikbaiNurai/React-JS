import React, {useState, useRef, useCallback, useEffect} from "react";
import {StudentsList} from "./StudentsList";

export const  StudentssList =()=> {
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState("all");
  const inputRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("students");
    if (saved) {
      setStudents(JSON.parse(saved));
    }
  }, []);

  useEffect (() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const toggleStudent = useCallback((id) => {
    setStudents(prev => prev.map(s => s.id === id ? {...s, completed: !s.completed}:s));
  }, []);

  const deleteStudents = useCallback((id) => {
    setStudents(prev => prev.filter(s => s.id !== id));
  }, []);

  const filteredStudents = students.filter((t) => {
    if (filter === "lastname") return !s.completed;
    if (filter === "firstname") return s.completed;
    return true;
  });

  return (
    <div style = {{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height:"100vh", textAlign: "center"}}>

      <div style = {{textAlign: "center", width: "1500px"}}>
        
        <h1>Students List</h1>

        <div style = {{marginBottom: 20, padding:"10px"}}>
          <button onClick = {() => setFilter("all")} style = {{marginRight: "8px"}}>All</button>
          <button onClick = {() => setFilter("lastname")} style = {{marginRight: "8px"}}>LastName</button>
          <button onClick = {() => setFilter("firstname")} style = {{marginRight: "8px"}}>FirstName</button>
        </div>

        <p>
          Total: {students.length}
        </p>

        <StudentsList
        students = {filteredStudents}
        toggleStudent = {toggleStudent}
        deleteStudent = {deleteStudents}
        />
      </div>
    </div>
  );
}
