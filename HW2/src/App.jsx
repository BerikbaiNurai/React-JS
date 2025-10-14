import React from "react";
import UserCard from "./UserCard";
import Button from "./Button";

function App () {
  const users = [
    {id: 1, name: "Nuray", email: "nurajberikbaj@gmail.com"},
    {id: 2, name: "Aliyanur", email: "aliyakaldybay@gmail.com"},
    {id: 3, name: "Aigerim", email: "aigerim13@gmail.com"},
    {id: 4, name: "Azhar", email: "azharkhamitbek@gmail.com"},
  ];

  return (
    <div>
      <h1 style = {{color: "#6a0074", textAlign: "center"}}>User List</h1>

      <div style = {{display: "flex", gap: "20px", flexWrap: "wrap"}}>
        {users.map((user) => (
          <UserCard key = {user.id} name = {user.name} email = {user.email} />
        ))}
      </div>

      <div style = {{marginTop: "40px", textAlign: "center"}}>
        <Button text = "Click Me!" />
      </div>
    </div>
  );
}

export default App;