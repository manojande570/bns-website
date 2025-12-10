'use client';

import { useEffect, useState } from 'react';
import styles from '@/styles/Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        setMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <a href="/" className={styles.logoLink}>
                <div className={styles.logo}>
                    <img src="https://www.bnsinc.us/assets/images/logo-white.png" alt="BNS International" />
                </div>
            </a>
            <div className={styles.desktopNav}>
                <ul className={styles.navLinks}>
                    <li>
                        <a href="/#home">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/services">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="/solutions">
                            Solutions
                        </a>
                    </li>
                    <li>
                        <a href="/products">
                            Products
                        </a>
                    </li>
                    <li>
                        <a href="/expertise">
                            Expertise
                        </a>
                    </li>
                    <li>
                        <a href="/careers">
                            Careers
                        </a>
                    </li>
                    <li>
                        <a href="/#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
            
            <button 
                className={styles.mobileMenuButton}
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
            >
                <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ''}`}></span>
                <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ''}`}></span>
                <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ''}`}></span>
            </button>
            
            <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
                <ul className={styles.mobileNavLinks}>
                    <li>
                        <a href="/#home" onClick={(e) => handleClick(e, '#home')}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/services">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="/solutions">
                            Solutions
                        </a>
                    </li>
                    <li>
                        <a href="/products">
                            Products
                        </a>
                    </li>
                    <li>
                        <a href="/expertise">
                            Expertise
                        </a>
                    </li>
                    <li>
                        <a href="/careers">
                            Careers
                        </a>
                    </li>
                    <li>
                        <a href="/#contact" onClick={(e) => handleClick(e, '#contact')}>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
