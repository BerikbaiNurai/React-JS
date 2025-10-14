import React, {useState, useRef, useCallback, useEffect, inputRef} from "react";

export const AddStudents = () => {
    const handeAddStudent = useCallback(() => {
    const text = inputRef.current.value.trim();
    if (!text) return;
    setStudents(prev => [...prev, {id: Date.now(), text, completed: false}]);
    inputRef.current.value = "";
    inputRef.current.focus();
  }, []);

  return (
    <div style = {{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height:"100vh", textAlign: "center"}}>

      <div style = {{textAlign: "center", width: "1500px"}}>
        
        <h1>Students Card</h1>
        
        <div style = {{marginBottom: 12}}>
          <input ref = {inputRef} placeholder="Enter students" style = {{marginRight: "8px", padding:"4px"}}/>
          <button onClick={handeAddStudent}>Add Students</button>
        </div>
      </div>
    </div>
  );
}