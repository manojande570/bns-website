'use client';

import { useEffect, useState } from 'react';
import styles from '@/styles/Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

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
    };

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.logo}>BNS International</div>
            <ul className={styles.navLinks}>
                <li>
                    <a href="#home" onClick={(e) => handleClick(e, '#home')}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#about" onClick={(e) => handleClick(e, '#about')}>
                        About
                    </a>
                </li>
                <li>
                    <a href="#services" onClick={(e) => handleClick(e, '#services')}>
                        Services
                    </a>
                </li>
                <li>
                    <a href="#solutions" onClick={(e) => handleClick(e, '#solutions')}>
                        Solutions
                    </a>
                </li>
                <li>
                    <a href="#contact" onClick={(e) => handleClick(e, '#contact')}>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}
