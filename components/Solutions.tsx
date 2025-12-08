'use client';

import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import styles from '@/styles/Solutions.module.css';

export default function Solutions() {
    const solutions = [
        {
            number: '01',
            title: 'Architecture',
            description:
                'BNS International Inc has spent the last few years compiling a list of cutting-edge architectural solutions.',
            features: ['Industry Research', 'Modular Design', 'Implementation Strategy'],
        },
        {
            number: '02',
            title: 'App Development',
            description: 'We use state-of-the-art technologies in Applications Development.',
            features: ['Product Development', 'Customized Development', 'New Application Development'],
        },
        {
            number: '03',
            title: 'IT Consulting',
            description: 'We provide IT consulting services to assist our clients with modern solutions.',
            features: [
                'App Portfolio Rationalization',
                'Service Oriented Architecture',
                'Business Process Management',
            ],
        },
    ];

    return (
        <ScrollReveal>
            <section className={styles.solutions} id="solutions">
                <h2 className="section-title">Our Solutions</h2>
                <p className={styles.solutionsDescription}>
                    Globalization, increased competition, uncertain markets and tenuous world politics -- all
                    of it has made the business of doing business less predictable, and more volatile, than
                    ever before.
                </p>
                <div className={styles.solutionsGrid}>
                    {solutions.map((solution, index) => (
                        <div key={index} className={styles.solutionCard}>
                            <div className={styles.solutionNumber}>{solution.number}</div>
                            <h3>{solution.title}</h3>
                            <p>{solution.description}</p>
                            <ul>
                                {solution.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className={styles.expertiseButtonContainer}>
                    <Link href="/expertise" className={styles.expertiseLink}>
                        <button className={styles.expertiseButton}>
                            View Our Expertise
                            <span className={styles.arrow}>→</span>
                        </button>
                    </Link>
                </div>
            </section>
        </ScrollReveal>
    );
}
