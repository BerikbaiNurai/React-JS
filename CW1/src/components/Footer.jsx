import React from "react";
import "./Footer.css";

function Footer(){
    return(
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Nuray Portfolio</h4>
                    <p>Frontend Developer & UI/UX Designer</p>
                </div>
                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>Email: nurajberikbaj@gmail.com</p>
                    <p>Almaty, Kazakhstan</p>
                </div>
                <div className="footer-section">
                    <h4>Technologies</h4>
                    <p>React • JavaScript • HTML/CSS</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Nuray Portfolio. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;