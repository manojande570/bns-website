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
                    <a href="/#solutions">
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
                    <a href="/#contact">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}
