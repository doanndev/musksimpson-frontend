'use client';

import React, { useEffect, useState } from 'react'
import './Navbar.css'
import MenuIcon from '@/assets/svgs/MenuIcon.svg';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        } else {
            console.log("Element not found");
        }
    };

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10);
        });
    });

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`headerMain ${scroll ? "sticky" : ""}`}>
            <nav className='navbar'>
                <div className='logo'>
                    <h1 className='logo-heading'>MUSKSIMPSON</h1>
                </div>
                <div className='menu'>
                    <ul>
                        <li onClick={() => handleScroll('about')}>About</li>
                        <li onClick={() => handleScroll('howtobuy')}>How To Buy</li>
                        <li onClick={() => handleScroll('tokenomics')}>Tokenomics</li>
                        <li onClick={() => handleScroll('roadmap')}>Roadmap</li>
                        <li onClick={() => handleScroll('faq')}>FAQ</li>
                    </ul>
                </div>
                <div className={`menu-mobile ${isMenuOpen ? 'open' : 'hidden'}`} >
                    <ul>
                        <li onClick={() => handleScroll('about')}>About</li>
                        <li onClick={() => handleScroll('howtobuy')}>How To Buy</li>
                        <li onClick={() => handleScroll('tokenomics')}>Tokenomics</li>
                        <li onClick={() => handleScroll('roadmap')}>Roadmap</li>
                        <li onClick={() => handleScroll('faq')}>FAQ</li>
                    </ul>
                </div>
                <MenuIcon className="menu-icon" onClick={toggleMenu} />
            </nav>
            {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
        </header>
    )
}

export default Navbar