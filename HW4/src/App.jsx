import React, {useState, useRef, useCallback, useEffect} from "react";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const inputRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  useEffect (() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback(() => {
    const text = inputRef.current.value.trim();
    if (!text) return;
    setTasks(prev => [...prev, {id: Date.now(), text, completed: false}]);
    inputRef.current.value = "";
    inputRef.current.focus();
  }, []);

  const toggleTask = useCallback((id) => {
    setTasks(prev => prev.map(t => t.id === id ? {...t, completed: !t.completed}:t));
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  }, []);

  const filteredTasks = tasks.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  return (
    <div style = {{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height:"100vh", textAlign: "center"}}>

      <div style = {{textAlign: "center", width: "1500px"}}>
        
        <h1>ToDo List</h1>
        
        <div style = {{marginBottom: 12}}>
          <input ref = {inputRef} placeholder="Enter task" style = {{marginRight: "8px", padding:"4px"}}/>
          <button onClick={addTask}>Add Task</button>
        </div>

        <div style = {{marginBottom: 20, padding:"10px"}}>
          <button onClick = {() => setFilter("all")} style = {{marginRight: "8px"}}>All</button>
          <button onClick = {() => setFilter("active")} style = {{marginRight: "8px"}}>Active</button>
          <button onClick = {() => setFilter("completed")} style = {{marginRight: "8px"}}>Completed</button>
        </div>

        <p>
          Total: {tasks.length} / Completed: {tasks.filter((t) => t.completed). length}
        </p>

        <TaskList
        tasks = {filteredTasks}
        toggleTask = {toggleTask}
        deleteTask = {deleteTask}
        />
      </div>
    </div>
  );
}

export default App;