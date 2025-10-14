import React from "react";

function Header(){
    return (
        <header style={{ backgroundColor: "darkblue", padding: "15px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <h2 style ={{color: "white", marginLeft: "50px"}}>My project</h2>

            <nav>
                <ul style = {{listStyle: "none", display: "flex", gap: "20px", padding: 0, margin: 0, marginRight: "50px"}} >
                    <li><a href="#" style = {{textDecoration: "none", color: "white"}} >Home</a></li>
                    <li><a href="#" style = {{textDecoration: "none", color: "white"}} >About</a></li>
                    <li><a href="#" style = {{textDecoration: "none", color: "white"}} >Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;