'use client';

import Navbar from '@/components/Navbar';
import styles from '@/styles/ProductsPage.module.css';

export default function ProductsPage() {
    return (
        <>
            <Navbar />
            <div className={styles.pageWrapper}>
                <div className={styles.productsPage}>
                    <div className={styles.content}>
                        <div className={styles.header}>
                            <p className={styles.subtitle}>What We Build</p>
                            <h1 className={styles.title}>Our Products</h1>
                            <p className={styles.intro}>
                                BNS International is an Integrated Technology, Product development, Consultancy, Services Company providing e-Business Solutions, Infrastructure Management to our valuable clients.
                            </p>
                        </div>

                        {/* Fresh Buds */}
                        <div className={styles.productSection}>
                            <div className={styles.productContent}>
                                <h2>Fresh Buds</h2>
                                <p className={styles.tagline}>Online Recruitment System for Freshers</p>
                                <p>
                                    Online recruitment system for all types of employers to recruit fresher, they can search and create event for interview process. Employer can search and sort profile based on pass out year, marks and more.
                                </p>

                                <div className={styles.featuresList}>
                                    <h3>Key Features</h3>
                                    <div className={styles.feature}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <circle cx="12" cy="12" r="10" fill="url(#check1)" />
                                            <path d="M8 12 L11 15 L16 9" stroke="white" strokeWidth="2" fill="none" />
                                            <defs>
                                                <linearGradient id="check1" x1="0" y1="0" x2="24" y2="24">
                                                    <stop offset="0%" stopColor="#667eea" />
                                                    <stop offset="100%" stopColor="#764ba2" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <span>Full automated recruitment process</span>
                                    </div>
                                    <div className={styles.feature}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <circle cx="12" cy="12" r="10" fill="url(#check2)" />
                                            <path d="M8 12 L11 15 L16 9" stroke="white" strokeWidth="2" fill="none" />
                                            <defs>
                                                <linearGradient id="check2" x1="0" y1="0" x2="24" y2="24">
                                                    <stop offset="0%" stopColor="#667eea" />
                                                    <stop offset="100%" stopColor="#764ba2" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <span>Event notification system</span>
                                    </div>
                                    <div className={styles.feature}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <circle cx="12" cy="12" r="10" fill="url(#check3)" />
                                            <path d="M8 12 L11 15 L16 9" stroke="white" strokeWidth="2" fill="none" />
                                            <defs>
                                                <linearGradient id="check3" x1="0" y1="0" x2="24" y2="24">
                                                    <stop offset="0%" stopColor="#667eea" />
                                                    <stop offset="100%" stopColor="#764ba2" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <span>XLS file import and export</span>
                                    </div>
                                    <div className={styles.feature}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <circle cx="12" cy="12" r="10" fill="url(#check4)" />
                                            <path d="M8 12 L11 15 L16 9" stroke="white" strokeWidth="2" fill="none" />
                                            <defs>
                                                <linearGradient id="check4" x1="0" y1="0" x2="24" y2="24">
                                                    <stop offset="0%" stopColor="#667eea" />
                                                    <stop offset="100%" stopColor="#764ba2" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <span>Search and sort by pass out year, marks and more</span>
                                    </div>
                                </div>

                                <div className={styles.contactInfo}>
                                    <p>Please contact for more details and demo at <a href="mailto:contact@bnsinc.us">contact@bnsinc.us</a></p>
                                    <p>Visit us on <a href="https://www.freshbuds.net" target="_blank" rel="noopener noreferrer">www.freshbuds.net</a></p>
                                </div>
                            </div>
                            <div className={styles.productImage}>
                                <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none">
                                    <rect width="400" height="400" fill="url(#freshbudsGrad)" rx="20" />
                                    <circle cx="200" cy="150" r="60" fill="rgba(255,255,255,0.1)" />
                                    <rect x="100" y="240" width="200" height="120" rx="10" fill="rgba(255,255,255,0.1)" />
                                    <circle cx="150" cy="280" r="20" fill="rgba(255,255,255,0.15)" />
                                    <circle cx="200" cy="280" r="20" fill="rgba(255,255,255,0.15)" />
                                    <circle cx="250" cy="280" r="20" fill="rgba(255,255,255,0.15)" />
                                    <defs>
                                        <linearGradient id="freshbudsGrad" x1="0" y1="0" x2="400" y2="400">
                                            <stop offset="0%" stopColor="#667eea" />
                                            <stop offset="100%" stopColor="#764ba2" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                        {/* Mobile SAP CRM Sales */}
                        <div className={`${styles.productSection} ${styles.reverse}`}>
                            <div className={styles.productImage}>
                                <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none">
                                    <rect width="400" height="400" fill="url(#sapGrad)" rx="20" />
                                    <rect x="120" y="80" width="160" height="280" rx="15" fill="rgba(255,255,255,0.1)" />
                                    <rect x="140" y="100" width="120" height="200" rx="5" fill="rgba(255,255,255,0.15)" />
                                    <circle cx="200" cy="330" r="15" fill="rgba(255,255,255,0.2)" />
                                    <defs>
                                        <linearGradient id="sapGrad" x1="0" y1="0" x2="400" y2="400">
                                            <stop offset="0%" stopColor="#4facfe" />
                                            <stop offset="100%" stopColor="#00f2fe" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className={styles.productContent}>
                                <h2>Mobile SAP CRM Sales</h2>
                                <p className={styles.tagline}>iPhone and Android App for SAP CRM Mobile Sales</p>
                                <p>
                                    This is iPhone and Android app for SAP CRM Mobile Sales. The mobile sales application for new Product and product support sales teams will include the following master data objects: Accounts, Contacts and iBase.
                                </p>

                                <div className={styles.capabilities}>
                                    <h3>Capabilities</h3>
                                    <ul>
                                        <li>Search and view details on Accounts, Contacts, and iBase</li>
                                        <li>Add master data objects to transactions like activities, quotations, leads and opportunities</li>
                                        <li>Work online and offline with automatic sync</li>
                                        <li>Security role-based access control</li>
                                        <li>Add prospects from mobile application</li>
                                        <li>Automated notifications and workflows after sync</li>
                                    </ul>
                                </div>

                                <div className={styles.highlight}>
                                    <h4>Key Benefits</h4>
                                    <p>
                                        Master data will be restricted by the SAP-assigned security role which will control the amount of data and types of transactions a user may execute. A user will be able to use the system while connected to the internet and while off-line. Transactions created while the user is off-line will sync to the production system when the user reconnects to the internet.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className={styles.ctaSection}>
                            <h2>Interested in Our Products?</h2>
                            <p>Contact us to learn more about how our products can benefit your organization</p>
                            <a href="mailto:contact@bnsinc.us">
                                <button className={styles.ctaButton}>Get In Touch</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
