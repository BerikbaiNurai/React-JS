import React from "react";
import "./About.css";

function About() {
    return (
        <div className="about-page">
            <div className="about-container">
                <h1 className="about-title">About Me</h1>
                
                <div className="about-section">
                    <h2>Education</h2>
                    <p>2nd year student at AlmaU, studying React JS and modern web technologies.</p>
                </div>

                <div className="about-section">
                    <h2>Skills</h2>
                    <div className="skills-grid">
                        <div className="skill-item">React JS</div>
                        <div className="skill-item">JavaScript</div>
                        <div className="skill-item">HTML/CSS</div>
                        <div className="skill-item">UI/UX</div>
                    </div>
                </div>

                <div className="about-section">
                    <h2>Experience</h2>
                    <p>Creating modern web applications using React. Passionate about design and user interface development.</p>
                </div>

                <div className="about-section">
                    <h2>Goals</h2>
                    <p>To become a professional frontend developer and create high-quality web applications.</p>
                </div>
            </div>
        </div>
    );
}

export default About;
