import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { AiFillHome } from 'react-icons/ai';
import { FaTruck } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';

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
                        <NavLink to="/" className="header-link" activeClassName="active">
                            <AiFillHome style={{ marginRight: '8px' }} /> Home
                        </NavLink>
                    </li>
                    <li className="header-item">
                        <NavLink to="/lieferservice" className="header-link" activeClassName="active">
                            <FaTruck style={{ marginRight: '8px' }} /> Lieferservice
                        </NavLink>
                    </li>
                    <li className="header-item">
                        <a href="#oeffnungszeiten" className="header-link">
                            <MdAccessTime style={{ marginRight: '8px' }} /> Open
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;