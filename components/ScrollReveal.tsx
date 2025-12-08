'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
}

export default function ScrollReveal({ children, className = '' }: ScrollRevealProps) {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const revealOnScroll = () => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add('active');
            }
        };

        // Check on mount
        revealOnScroll();

        window.addEventListener('scroll', revealOnScroll);

        return () => {
            window.removeEventListener('scroll', revealOnScroll);
        };
    }, []);

    return (
        <div ref={elementRef} className={`reveal ${className}`}>
            {children}
        </div>
    );
}
