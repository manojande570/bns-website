'use client';

import Navbar from '@/components/Navbar';
import styles from '@/styles/AboutPage.module.css';

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <div className={styles.pageWrapper}>
                <div className={styles.aboutPage}>
                    <div className={styles.content}>
                        <div className={styles.header}>
                            <p className={styles.subtitle}>Welcome to BNS</p>
                            <h1 className={styles.title}>About Us</h1>
                        </div>

                        <div className={styles.section}>
                            <p>
                                BNS International Inc is an upcoming professional consultancy specializing in recruitment of permanent, contractual & temporary positions in Financial, IT services. Our aim is to bring together the job seekers and employers thereby enhancing growth & opportunities as a whole. Our commitment and expertise will help companies reduce the recruitment cost significantly.
                            </p>
                            <p>
                                Our industry aligned team is very experienced in understanding the job requirements and identifying the right candidates who are suitable for the job requirements across various industries. Employer can have enormous database to find the best resumes and for employees they can directly apply for any job through our portal.
                            </p>
                        </div>

                        <div className={styles.features}>
                            <div className={styles.featureCard}>
                                <div className={styles.iconWrapper}>
                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                                        <circle cx="30" cy="30" r="28" fill="url(#grad1)" opacity="0.2" />
                                        <path d="M30 15L35 25H25L30 15Z M30 35L35 45H25L30 35Z M15 30L25 35V25L15 30Z M45 30L35 35V25L45 30Z" fill="url(#grad1)" />
                                        <defs>
                                            <linearGradient id="grad1" x1="0" y1="0" x2="60" y2="60">
                                                <stop offset="0%" stopColor="#667eea" />
                                                <stop offset="100%" stopColor="#764ba2" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <h3>Tailored Advice & Support</h3>
                            </div>
                            <div className={styles.featureCard}>
                                <div className={styles.iconWrapper}>
                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                                        <circle cx="30" cy="30" r="28" fill="url(#grad2)" opacity="0.2" />
                                        <rect x="15" y="20" width="30" height="25" rx="3" fill="url(#grad2)" />
                                        <rect x="20" y="15" width="20" height="5" rx="2" fill="url(#grad2)" />
                                        <defs>
                                            <linearGradient id="grad2" x1="0" y1="0" x2="60" y2="60">
                                                <stop offset="0%" stopColor="#f093fb" />
                                                <stop offset="100%" stopColor="#f5576c" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <h3>Flexible Company Policies</h3>
                            </div>
                        </div>

                        <div className={styles.contactSection}>
                            <h2>Contact Us</h2>
                            <div className={styles.contactImages}>
                                <div className={styles.imageBox}>
                                    <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
                                        <circle cx="75" cy="75" r="70" fill="url(#contactGrad1)" opacity="0.8" />
                                        <defs>
                                            <linearGradient id="contactGrad1" x1="0" y1="0" x2="150" y2="150">
                                                <stop offset="0%" stopColor="#667eea" />
                                                <stop offset="100%" stopColor="#764ba2" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className={styles.imageBox}>
                                    <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
                                        <circle cx="75" cy="75" r="70" fill="url(#contactGrad2)" opacity="0.8" />
                                        <defs>
                                            <linearGradient id="contactGrad2" x1="0" y1="0" x2="150" y2="150">
                                                <stop offset="0%" stopColor="#f093fb" />
                                                <stop offset="100%" stopColor="#f5576c" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className={styles.imageBox}>
                                    <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
                                        <circle cx="75" cy="75" r="70" fill="url(#contactGrad3)" opacity="0.8" />
                                        <defs>
                                            <linearGradient id="contactGrad3" x1="0" y1="0" x2="150" y2="150">
                                                <stop offset="0%" stopColor="#4facfe" />
                                                <stop offset="100%" stopColor="#00f2fe" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <p className={styles.contactText}>If you have any query... We are available</p>
                        </div>

                        <div className={styles.businessSection}>
                            <h2>Our Business</h2>
                            <h3 className={styles.standOut}>Stand Out From The Rest</h3>
                            <div className={styles.businessImage}>
                                <svg width="100%" height="100%" viewBox="0 0 600 300" fill="none">
                                    <rect width="600" height="300" fill="url(#businessGrad)" rx="20" />
                                    <circle cx="150" cy="150" r="80" fill="rgba(255,255,255,0.1)" />
                                    <circle cx="450" cy="150" r="80" fill="rgba(255,255,255,0.1)" />
                                    <defs>
                                        <linearGradient id="businessGrad" x1="0" y1="0" x2="600" y2="300">
                                            <stop offset="0%" stopColor="#4facfe" />
                                            <stop offset="100%" stopColor="#00f2fe" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                        <div className={styles.missionVision}>
                            <div className={styles.missionCard}>
                                <h2>Our Mission</h2>
                                <ul>
                                    <li>To keep giving world class platform through innovative and outstanding services.</li>
                                    <li>To help companies and organizations to change in both management and IT.</li>
                                    <li>To make our customers and employees successful</li>
                                    <li>To use our expert and innovative capabilities to create long-term business value and growth for our customers</li>
                                </ul>
                            </div>

                            <div className={styles.valuesCard}>
                                <h2>Our Core Values</h2>
                                <div className={styles.valueItem}>
                                    <strong>Customer Focus:</strong> we give our first and highest attention to our customers. Our success is defined by our customers' success.
                                </div>
                                <div className={styles.valueItem}>
                                    <strong>Responsibility & Accountability:</strong> we live up to our commitments and to the trust given us by our customers
                                </div>
                                <div className={styles.valueItem}>
                                    <strong>Partnership:</strong> we form collaborative teamwork and win-win relationships with our customers
                                </div>
                            </div>
                        </div>

                        <div className={styles.visionSection}>
                            <div className={styles.visionImage}>
                                <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none">
                                    <rect width="400" height="400" fill="url(#visionGrad)" rx="20" />
                                    <circle cx="200" cy="200" r="120" fill="rgba(255,255,255,0.1)" />
                                    <circle cx="200" cy="200" r="80" fill="rgba(255,255,255,0.1)" />
                                    <defs>
                                        <linearGradient id="visionGrad" x1="0" y1="0" x2="400" y2="400">
                                            <stop offset="0%" stopColor="#fa709a" />
                                            <stop offset="100%" stopColor="#fee140" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className={styles.visionContent}>
                                <h2>Our Vision</h2>
                                <p>We will accomplish our Vision through our commitment to strategic growth, outstanding service, and your valuable support.</p>
                                <ul>
                                    <li>Providing unparalleled personal service.</li>
                                    <li>Proactively tailoring innovative solutions to fully meet each of our customer's individual needs.</li>
                                    <li>Treating customers and colleagues with due respect.</li>
                                    <li>Being accountable to customers in all we do.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
