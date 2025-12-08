'use client';

import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import styles from '@/styles/Services.module.css';

export default function Services() {
    const services = [
        {
            icon: '🎯',
            title: 'Recruitment',
            description:
                'We offer services of experienced consultants to help your HR department in identifying and attracting the right workforce for your company.',
        },
        {
            icon: '👔',
            title: 'Executive Search',
            description:
                'We recommend Executive Search when you are looking for leadership or highly sought after management professionals.',
        },
        {
            icon: '💻',
            title: 'IT Staffing',
            description:
                'People are the most powerful assets of a company and the ability to choose the right people is most strategic for any company, today.',
        },
        {
            icon: '🌐',
            title: 'Outsourcing',
            description:
                'We provide solutions to any recruitment process which are outsourced to us partly/fully for onsite or offshore model.',
        },
    ];

    return (
        <ScrollReveal>
            <section className={styles.services} id="services">
                <p className="section-subtitle">We Offer</p>
                <h2 className="section-title">Different Services</h2>
                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.serviceCard}>
                            <div className={styles.serviceIcon}>{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.readMoreContainer}>
                    <Link href="/services" className={styles.readMoreLink}>
                        <button className={styles.readMoreButton}>
                            View All Services
                            <span className={styles.arrow}>→</span>
                        </button>
                    </Link>
                </div>
            </section>
        </ScrollReveal>
    );
}
