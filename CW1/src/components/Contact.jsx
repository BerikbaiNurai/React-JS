import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <div className="contact-page">
            <div className="contact-container">
                <h1 className="contact-title">Contact Me</h1>
                
                <div className="contact-info">
                    <div className="contact-item">
                        <h3>Email</h3>
                        <p>nurajberikbaj@gmail.com</p>
                    </div>
                    <div className="contact-item">
                        <h3>Phone</h3>
                        <p>+7 747 271 20 50</p>
                    </div>
                    <div className="contact-item">
                        <h3>Location</h3>
                        <p>Almaty, Kazakhstan</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
