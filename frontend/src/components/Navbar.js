import React, { useState } from 'react';
import '../App.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
                <div className="progress-container">
                    <div className="progress-bar" id="myBar"></div>
                </div>
                <div className="max-width">
                    <div className="logo">
                        <a href="#">Resume<span> Submission</span></a>
                    </div>
                    <ul className="menu">
                        <li><a href="#home" className="menu-btn">Home</a></li>
                        <li><a href="#about" className="menu-btn">About</a></li>
                        <li><a href="#services" className="menu-btn">Services</a></li>
                        <li><a href="#contact" className="menu-btn">Contact</a></li>
                    </ul>
                    <div className="menu-btn" onClick={handleMenuToggle}>
                        <i className="material-icons">menu</i>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
