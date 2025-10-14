import React, {useState, useEffect} from "react";

function Timer(){
    const [seconds, setSeconds] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer = null;

        if (isRunning && seconds > 0) {
            timer = setInterval(() => {
                setSeconds((prev) => prev - 1);
            }, 1000);
        } 
        
        if (seconds === 0 && isRunning) {
            setIsRunning(false);
            alert ("Time's up!");
        }

        return () => clearInterval(timer);
    }, [isRunning, seconds]);

    const startTimer = () => {
        if (inputValue > 0) {
            setSeconds(Number(inputValue));
            setIsRunning(true);
        }
    };   

    const stopTimer = () => {
        setIsRunning(false);
    };   
 

    return (
        <div style ={{textAlign: "center", marginTop: "250px", height: "100vh", width: "100vw"}}>
            <h1>Countdown Timer</h1>

            <input
                type = "number"
                value = {inputValue}    
                onChange={(e) => setInputValue(e.target.value)}  
                placeholder="Enter seconds"
                style={{padding: "8px", marginRight: "10px"}}
                disabled = {isRunning}
            />
            {!isRunning ? (
                <button onClick = {startTimer} style = {{padding: "8px 15px"}}>
                    Start
                </button>
            ) : (
                <button onClick={stopTimer} style = {{ padding: "8px 15px", background: "red", color: "white"}}>
                    Stop
                </button>
            )}

            <h2 style = {{marginTop: "20px"}}>{seconds}</h2>
        </div>
    );
}

export default Timer;