// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <img src="/img/banner3.jpeg" alt="Kiosk am Niederrhein" className="header-image" />
            <nav className="header-nav">
                <ul className="header-list">
                    <li className="header-item">
                        <NavLink to="/" className="header-link" activeClassName="active">Home</NavLink>
                    </li>
                    <li className="header-item">
                        <NavLink to="/lieferservice" className="header-link" activeClassName="active">Lieferservice</NavLink>
                    </li>
                    <li className="header-item">
                        <a href="#oeffnungszeiten" className="header-link">Open</a>
                    </li>
                    <li className="header-item">
                        
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;