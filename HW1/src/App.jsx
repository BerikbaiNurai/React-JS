import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function App(){
    return(
        <div style = {{display: "flex", flexDirection: "column", minHeight: "100vh"}} >
            <Header />
            <main style = {{flex: 1, display: "flex", alignItems: "center", justifyContent: "center"}}>
                <h1>Hello, React!</h1>
            </main>
            <Footer />
        </div>
    );
}

export default App;