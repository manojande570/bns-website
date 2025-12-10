'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';
import styles from '@/styles/About.module.css';

export default function About() {
    const [visibleParagraphs, setVisibleParagraphs] = useState<number[]>([]);
    const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = paragraphRefs.current.indexOf(entry.target as HTMLParagraphElement);
                        if (index !== -1) {
                            // Add paragraphs sequentially with delay
                            setTimeout(() => {
                                setVisibleParagraphs(prev => {
                                    if (!prev.includes(index)) {
                                        return [...prev, index].sort((a, b) => a - b);
                                    }
                                    return prev;
                                });
                            }, index * 600); // 600ms delay between each paragraph
                        }
                    }
                });
            },
            { threshold: 0.3 }
        );

        paragraphRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <ScrollReveal>
            <section className={styles.about} id="about" ref={sectionRef}>
                <p className="section-subtitle">Welcome to BNS</p>
                <h2 className="section-title">About Us</h2>
                <div className={styles.aboutContent}>
                    <div className={styles.aboutText}>
                        <p 
                            ref={el => paragraphRefs.current[0] = el}
                            className={`${styles.paragraph} ${styles.slideLeft} ${visibleParagraphs.includes(0) ? styles.visible : ''}`}
                        >
                            BNS International Inc is a leading IT staffing and Software Development Company
                            located in USA. Leveraging ten years of staffing and consulting experience, our
                            company has pioneered in the field of IT and outsourcing services.
                        </p>
                        <br />
                        <p 
                            ref={el => paragraphRefs.current[1] = el}
                            className={`${styles.paragraph} ${styles.slideRight} ${visibleParagraphs.includes(1) ? styles.visible : ''}`}
                        >
                            With a wide range of project execution models and costing models, our solutions are
                            very client-centric, cost-effective and process driven quality solutions. Our
                            solutions aim to provide high value by optimizing cost of ownership of technology
                            investments for customers.
                        </p>
                        <br />
                        <p 
                            ref={el => paragraphRefs.current[2] = el}
                            className={`${styles.paragraph} ${styles.slideLeft} ${visibleParagraphs.includes(2) ? styles.visible : ''}`}
                        >
                            We focus exclusively on maximizing client returns from outsourcing and off-shoring.
                            Our wide range of customized models, scalability, and immense talent pool enable us
                            to reliably serve customer needs.
                        </p>
                        <br />
                        <Link href="/about" className={styles.readMoreLink}>
                            <button className={styles.readMoreButton}>
                                Read More
                                <span className={styles.arrow}>→</span>
                            </button>
                        </Link>
                    </div>
                    <div className={styles.aboutImage}>
                        <svg
                            width="500"
                            height="400"
                            viewBox="0 0 500 400"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect x="50" y="50" width="400" height="300" rx="20" fill="url(#grad1)" opacity="0.3" />
                            <circle cx="150" cy="150" r="60" fill="url(#grad2)" opacity="0.6" />
                            <circle cx="350" cy="150" r="60" fill="url(#grad3)" opacity="0.6" />
                            <rect x="100" y="250" width="300" height="80" rx="40" fill="url(#grad4)" opacity="0.7" />
                            <defs>
                                <linearGradient id="grad1" x1="50" y1="50" x2="450" y2="350">
                                    <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 1 }} />
                                </linearGradient>
                                <linearGradient id="grad2" x1="90" y1="90" x2="210" y2="210">
                                    <stop offset="0%" style={{ stopColor: '#f093fb', stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: '#f5576c', stopOpacity: 1 }} />
                                </linearGradient>
                                <linearGradient id="grad3" x1="290" y1="90" x2="410" y2="210">
                                    <stop offset="0%" style={{ stopColor: '#4facfe', stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: '#00f2fe', stopOpacity: 1 }} />
                                </linearGradient>
                                <linearGradient id="grad4" x1="100" y1="250" x2="400" y2="330">
                                    <stop offset="0%" style={{ stopColor: '#fa709a', stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: '#fee140', stopOpacity: 1 }} />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </section>
        </ScrollReveal>
    );
}
