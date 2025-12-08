'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import styles from '@/styles/ServicesPage.module.css';

export default function ServicesPage() {
    return (
        <>
            <Navbar />
            <div className={styles.pageWrapper}>
                <div className={styles.servicesPage}>
                    <div className={styles.content}>
                        <div className={styles.header}>
                            <p className={styles.subtitle}>What We Offer</p>
                            <h1 className={styles.title}>Our Services</h1>
                        </div>

                        {/* Recruitment Consulting */}
                        <div className={styles.serviceSection}>
                            <div className={styles.serviceContent}>
                                <h2>Recruitment Consulting</h2>
                                <p>
                                    We offer services of experienced consultants to help your HR department in identifying and attracting the right workforce for your company. Our Recruitment Consultants start by analyzing your company's workload and help in optimizing your recruitment portfolio. Our Consultants will also help in developing your recruitment plan and offer advice along every step of the way. We have expertise in recruitment planning, creation of job descriptions, classifieds advertising, managing advertising response, walk-in interviews etc.
                                </p>
                                <p className={styles.highlight}>
                                    Recruitment Consulting is an extremely beneficial service that you can avail when you would like to stay in-charge of the recruitment function, while still gaining from Global Technologies's expertise in domain.
                                </p>
                            </div>
                            <div className={styles.serviceImage}>
                                <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none">
                                    <rect width="400" height="300" fill="url(#recruitGrad)" rx="20" />
                                    <circle cx="200" cy="150" r="80" fill="rgba(255,255,255,0.1)" />
                                    <path d="M200 100 L220 130 L200 160 L180 130 Z" fill="rgba(255,255,255,0.2)" />
                                    <circle cx="150" cy="100" r="30" fill="rgba(255,255,255,0.15)" />
                                    <circle cx="250" cy="100" r="30" fill="rgba(255,255,255,0.15)" />
                                    <circle cx="150" cy="200" r="30" fill="rgba(255,255,255,0.15)" />
                                    <circle cx="250" cy="200" r="30" fill="rgba(255,255,255,0.15)" />
                                    <defs>
                                        <linearGradient id="recruitGrad" x1="0" y1="0" x2="400" y2="300">
                                            <stop offset="0%" stopColor="#667eea" />
                                            <stop offset="100%" stopColor="#764ba2" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                        {/* Executive Search */}
                        <div className={`${styles.serviceSection} ${styles.reverse}`}>
                            <div className={styles.serviceImage}>
                                <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none">
                                    <rect width="400" height="300" fill="url(#execGrad)" rx="20" />
                                    <circle cx="200" cy="150" r="100" fill="rgba(255,255,255,0.1)" />
                                    <circle cx="200" cy="150" r="60" fill="rgba(255,255,255,0.15)" />
                                    <path d="M200 90 L210 120 L240 120 L215 140 L225 170 L200 150 L175 170 L185 140 L160 120 L190 120 Z" fill="rgba(255,255,255,0.3)" />
                                    <defs>
                                        <linearGradient id="execGrad" x1="0" y1="0" x2="400" y2="300">
                                            <stop offset="0%" stopColor="#f093fb" />
                                            <stop offset="100%" stopColor="#f5576c" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className={styles.serviceContent}>
                                <h2>Executive Search</h2>
                                <p>
                                    We recommend Executive Search when you are looking for leadership or highly sought after management professionals. Our executive search process is a personalized approach based on a thorough understanding of the strategic, financial and operational intricacies associated with senior management employment. We understand that Executive Search mandates are extremely diverse based on individual company needs. We offer expert opinion and partner with you in the process of identifying and attracting the best suited executives.
                                </p>
                                <p>
                                    We use our extensive network and resources to help find hard-to-find niche candidate. This method is complex and time consuming. You receive ongoing progress reports throughout the process.
                                </p>
                                <p className={styles.highlight}>
                                    Leadership and Management are key players in a business. Our Executive Search team is highly specialized with experienced individuals and a world wide network of advisors. We offer strategic inputs and manage the entire search program with an extremely professional process and also a personalized touch.
                                </p>
                            </div>
                        </div>

                        {/* IT Staffing Solutions */}
                        <div className={styles.serviceSection}>
                            <div className={styles.serviceContent}>
                                <h2>IT Staffing Solutions</h2>
                                <p>
                                    People are the most powerful assets of a company and the ability to choose the right people is most strategic for any company, today. Companies across the globe lay critical emphasis on their human resources and in the process, newer methods have evolved to enable them to get the right people for the right job at the right time.
                                </p>
                                <div className={styles.benefitsList}>
                                    <div className={styles.benefit}>
                                        <div className={styles.benefitIcon}>
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                <circle cx="20" cy="20" r="18" fill="url(#benefit1)" />
                                                <path d="M15 20 L18 23 L25 16" stroke="white" strokeWidth="2" fill="none" />
                                                <defs>
                                                    <linearGradient id="benefit1" x1="0" y1="0" x2="40" y2="40">
                                                        <stop offset="0%" stopColor="#4facfe" />
                                                        <stop offset="100%" stopColor="#00f2fe" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <span>Right people for the right job</span>
                                    </div>
                                    <div className={styles.benefit}>
                                        <div className={styles.benefitIcon}>
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                <circle cx="20" cy="20" r="18" fill="url(#benefit2)" />
                                                <path d="M15 20 L18 23 L25 16" stroke="white" strokeWidth="2" fill="none" />
                                                <defs>
                                                    <linearGradient id="benefit2" x1="0" y1="0" x2="40" y2="40">
                                                        <stop offset="0%" stopColor="#4facfe" />
                                                        <stop offset="100%" stopColor="#00f2fe" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <span>Strategic talent acquisition</span>
                                    </div>
                                    <div className={styles.benefit}>
                                        <div className={styles.benefitIcon}>
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                <circle cx="20" cy="20" r="18" fill="url(#benefit3)" />
                                                <path d="M15 20 L18 23 L25 16" stroke="white" strokeWidth="2" fill="none" />
                                                <defs>
                                                    <linearGradient id="benefit3" x1="0" y1="0" x2="40" y2="40">
                                                        <stop offset="0%" stopColor="#4facfe" />
                                                        <stop offset="100%" stopColor="#00f2fe" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <span>Global expertise in IT staffing</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.serviceImage}>
                                <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none">
                                    <rect width="400" height="300" fill="url(#itGrad)" rx="20" />
                                    <rect x="100" y="80" width="200" height="140" rx="10" fill="rgba(255,255,255,0.1)" />
                                    <circle cx="200" cy="100" r="20" fill="rgba(255,255,255,0.2)" />
                                    <rect x="150" y="140" width="100" height="10" rx="5" fill="rgba(255,255,255,0.15)" />
                                    <rect x="150" y="160" width="100" height="10" rx="5" fill="rgba(255,255,255,0.15)" />
                                    <rect x="150" y="180" width="100" height="10" rx="5" fill="rgba(255,255,255,0.15)" />
                                    <defs>
                                        <linearGradient id="itGrad" x1="0" y1="0" x2="400" y2="300">
                                            <stop offset="0%" stopColor="#4facfe" />
                                            <stop offset="100%" stopColor="#00f2fe" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                        {/* Outsourcing */}
                        <div className={`${styles.serviceSection} ${styles.reverse}`}>
                            <div className={styles.serviceImage}>
                                <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none">
                                    <rect width="400" height="300" fill="url(#outGrad)" rx="20" />
                                    <circle cx="150" cy="150" r="60" fill="rgba(255,255,255,0.1)" />
                                    <circle cx="250" cy="150" r="60" fill="rgba(255,255,255,0.1)" />
                                    <path d="M150 150 L250 150" stroke="rgba(255,255,255,0.3)" strokeWidth="4" />
                                    <circle cx="200" cy="150" r="25" fill="rgba(255,255,255,0.2)" />
                                    <defs>
                                        <linearGradient id="outGrad" x1="0" y1="0" x2="400" y2="300">
                                            <stop offset="0%" stopColor="#fa709a" />
                                            <stop offset="100%" stopColor="#fee140" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className={styles.serviceContent}>
                                <h2>Out Sourcing</h2>
                                <p>
                                    We provide solutions to any recruitment process which are outsourced to us partly/fully for onsite or offshore model. These can be only for a back room recruitment processes or even for a fully integrated end-to-end sourcing viz. skill evaluations, joining, Induction, payroll till exit interviews etc.
                                </p>
                                <div className={styles.featureGrid}>
                                    <div className={styles.feature}>
                                        <h4>Onsite Model</h4>
                                        <p>Dedicated resources at your location</p>
                                    </div>
                                    <div className={styles.feature}>
                                        <h4>Offshore Model</h4>
                                        <p>Cost-effective remote solutions</p>
                                    </div>
                                    <div className={styles.feature}>
                                        <h4>End-to-End</h4>
                                        <p>Complete recruitment lifecycle management</p>
                                    </div>
                                    <div className={styles.feature}>
                                        <h4>Flexible Solutions</h4>
                                        <p>Partial or full process outsourcing</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className={styles.ctaSection}>
                            <h2>Ready to Transform Your Recruitment?</h2>
                            <p>Let us help you find the perfect talent for your organization</p>
                            <Link href="/#contact">
                                <button className={styles.ctaButton}>Get In Touch</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
