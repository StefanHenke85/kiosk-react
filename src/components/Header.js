import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

            setPrevScrollPos(currentScrollPos);
            setVisible(isVisible);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <header className={`header ${visible ? '' : 'header-hidden'}`}>
            <img src="/img/banner2.jpeg" alt="Kiosk am Niederrhein" className="header-image" />
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
                </ul>
            </nav>
        </header>
    );
}

export default Header;