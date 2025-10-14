import React from "react";
import "./Header.css";

function Header({ onPageChange, currentPage }) {
    const handlePageChange = (page) => {
        onPageChange(page);
    };

    return(
        <header className="header">
            <h1 className="logo" onClick={() => handlePageChange('home')} style={{cursor: 'pointer'}}>Me</h1>

            <nav>
                <ul className="nav-links">
                    <li>
                        <a 
                            href="#" 
                            onClick={(e) => { e.preventDefault(); handlePageChange('home'); }}
                            className={currentPage === 'home' ? 'active' : ''}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#" 
                            onClick={(e) => { e.preventDefault(); handlePageChange('about'); }}
                            className={currentPage === 'about' ? 'active' : ''}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#" 
                            onClick={(e) => { e.preventDefault(); handlePageChange('contact'); }}
                            className={currentPage === 'contact' ? 'active' : ''}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;