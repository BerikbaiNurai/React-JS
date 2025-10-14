import React from "react";
import ProfileCard from "./ProfileCard.jsx";
import "./Home.css";

function Home() {
    return (
        <div className="home-page">
            <div className="hero-section">
                <p className="hero-subtitle">I'm Nuray, a Frontend Developer</p>
            </div>
            
            <ProfileCard
                name="Nuray"
                email="nurajberikbaj@gmail.com"
                avatar="https://i.pinimg.com/736x/be/af/8c/beaf8c8271fb1a0e69a72eb9100073a6.jpg"
            />
            
            <div className="features-section">
                <div className="feature-card">
                    <h3>Design</h3>
                    <p>Creating beautiful interfaces</p>
                </div>
                <div className="feature-card">
                    <h3>Code</h3>
                    <p>Using react to code</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
