import React, {useState, useRef, useCallback} from "react";

function NameForm () {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const lastNameRef = useRef(null);

    const focusLastName = () => {
        if (lastNameRef.current) {
            lastNameRef.current.focus();
        }
    };

    const onShowData = useCallback (() => {
        alert(`First Name: ${firstName}, Last Name: ${lastName}`);
    }, [firstName, lastName]);

    return (
        <div style = {{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height:"100vh",
            textAlign: "center"
        }}>
            <h1>User Form</h1>

            <div style = {{marginBottom: "15px"}}>

                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter first name"
                    style = {{padding: "8px", marginRight: "10px", textAlign: "center"}}
                />

                <input
                    type="text"
                    ref = {lastNameRef}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter last name"
                    style = {{padding: "8px", marginRight: "10px", textAlign: "center"}}
                />
            </div>
            <div>
                <button onClick={focusLastName} style = {{padding: "8px 15px", color: "green", marginRight: "10px"}}>Focus Last Name</button>
                <button onClick={onShowData} style = {{padding: "8px 15px", color: "green"}}>Show Data</button>
            </div>
        </div>
    );
}

export default NameForm;