'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import styles from '@/styles/ExpertisePage.module.css';

export default function ExpertisePage() {
    const [activeTab, setActiveTab] = useState('domain');

    const domainAreas = [
        'Information Technology',
        'Semiconductor',
        'Telecom and Wireless',
        'Media & Entertainment',
        'Life science and Health Care',
        'Enterprise Product Engineering',
        'Infrastructure Management Services',
        'Power and Energy',
        'Automobile',
        'Consumer Services & Retail',
        'Banking, Financial Services & Insurance',
        'Utility',
        'IT Enabled Services'
    ];

    const positions = [
        'Independent Directors on Board',
        'CEOs',
        'CTOs',
        'VP (Engineering)',
        'Delivery Heads',
        'Program Managers',
        'Software Architects',
        'Marketing / Finance / HR Heads'
    ];

    return (
        <>
            <Navbar />
            <div className={styles.pageWrapper}>
                <div className={styles.expertisePage}>
                    <div className={styles.content}>
                        <div className={styles.header}>
                            <p className={styles.subtitle}>Our Capabilities</p>
                            <h1 className={styles.title}>Domain Expertise</h1>
                            <p className={styles.intro}>
                                Economic globalization has perpetuated the growths of industries which has progressively ascended over the years and haven't been much affected by market fluctuations. The procurement team at Global Technologies is driven by the passion to generate qualitative services to our clients and formidable growth for our candidates. It functions on a vast platform across large arrays of domains to find the right talent for our clients which enables stability, efficiency, experience and goodwill.
                            </p>
                        </div>

                        {/* Tab Navigation */}
                        <div className={styles.tabContainer}>
                            <button
                                className={`${styles.tab} ${activeTab === 'domain' ? styles.activeTab : ''}`}
                                onClick={() => setActiveTab('domain')}
                            >
                                Domain Expertise
                            </button>
                            <button
                                className={`${styles.tab} ${activeTab === 'database' ? styles.activeTab : ''}`}
                                onClick={() => setActiveTab('database')}
                            >
                                Database Expertise
                            </button>
                        </div>

                        {/* Domain Expertise Tab */}
                        {activeTab === 'domain' && (
                            <div className={styles.tabContent}>
                                <h2>Industry Domains</h2>
                                <div className={styles.domainGrid}>
                                    {domainAreas.map((domain, index) => (
                                        <div key={index} className={styles.domainCard}>
                                            <div className={styles.domainIcon}>
                                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                    <circle cx="20" cy="20" r="18" fill="url(#domainGrad)" opacity="0.2" />
                                                    <circle cx="20" cy="20" r="12" fill="url(#domainGrad)" />
                                                    <defs>
                                                        <linearGradient id="domainGrad" x1="0" y1="0" x2="40" y2="40">
                                                            <stop offset="0%" stopColor="#667eea" />
                                                            <stop offset="100%" stopColor="#764ba2" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <h3>{domain}</h3>
                                        </div>
                                    ))}
                                </div>

                                <div className={styles.positionsSection}>
                                    <h2>Senior & Top Management Positions</h2>
                                    <p className={styles.positionsIntro}>
                                        We deal mainly in Senior & Top Management positions, such as:
                                    </p>
                                    <div className={styles.positionsList}>
                                        {positions.map((position, index) => (
                                            <div key={index} className={styles.positionItem}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <circle cx="12" cy="12" r="10" fill="url(#posGrad)" />
                                                    <path d="M8 12 L11 15 L16 9" stroke="white" strokeWidth="2" fill="none" />
                                                    <defs>
                                                        <linearGradient id="posGrad" x1="0" y1="0" x2="24" y2="24">
                                                            <stop offset="0%" stopColor="#4facfe" />
                                                            <stop offset="100%" stopColor="#00f2fe" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                                <span>{position}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <p className={styles.highlight}>
                                        Sourcing in the domain areas of Telecom, Semiconductor, HealthCare, Banking, Web Development, System Admin, Mainframes & Quality Testing etc. We feel happy to share with you that we are competent in fulfilling the HR requirements with any specified experienced peoples in the said domain areas. We are able to do this with Head Hunting, Networks and our data base as Job portals have always been optional for us.
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Database Expertise Tab */}
                        {activeTab === 'database' && (
                            <div className={styles.tabContent}>
                                <p className={styles.databaseIntro}>
                                    Our database has an almost prodigal offering of IT skills, at Mid and Senior level. We are strong in high-end skills in areas such as:
                                </p>

                                <div className={styles.techSection}>
                                    <h3>Semiconductor</h3>
                                    <p>VLSI, ASIC Design, Embedded & DSP, Design, Device drivers, Hardware Design–Digital/ Analog, Signal, Board Design, Multimedia application in Embedded Linux, STB, MPEG etc...</p>
                                </div>

                                <div className={styles.techSection}>
                                    <h3>Telecom & Wireless</h3>
                                    <p>WLAN, Network Protocols- ATM, SONET, TCP/IP, HTTP, LDAP, DNS, SMTP, ISAPI, Mobile Applications- J2ME, Blackberry, iPhone, Android etc…</p>
                                </div>

                                <div className={styles.techSection}>
                                    <h3>Programming Languages</h3>
                                    <div className={styles.skillTags}>
                                        {['C#', 'VB.NET', 'Java', 'VC++', 'VB 6.0', 'C++', 'C', 'COBOL', 'Perl', 'SQL', 'Assembly', 'MUMPS', 'PL/SQL'].map((lang, idx) => (
                                            <span key={idx} className={styles.skillTag}>{lang}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.techSection}>
                                    <h3>Microsoft Technologies</h3>
                                    <div className={styles.skillTags}>
                                        {['.Net Framework', 'ASP.Net', 'ADO.Net', 'XML Web Services', 'ASP', 'COM', 'COM+', 'ATL', 'ADO'].map((tech, idx) => (
                                            <span key={idx} className={styles.skillTag}>{tech}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.techSection}>
                                    <h3>J2EE Technologies</h3>
                                    <div className={styles.skillTags}>
                                        {['EJB', 'Servlets', 'JSP', 'RMI', 'JDBC', 'Java Swing', 'JNDI', 'XML', 'JAAS', 'STRUTS'].map((tech, idx) => (
                                            <span key={idx} className={styles.skillTag}>{tech}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.techSection}>
                                    <h3>Application Servers</h3>
                                    <div className={styles.skillTags}>
                                        {['IIS', 'Apache/Tomcat', 'IBM WebSphere', 'BEA WebLogic', 'JBOSS'].map((server, idx) => (
                                            <span key={idx} className={styles.skillTag}>{server}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.techSection}>
                                    <h3>Database Technologies</h3>
                                    <div className={styles.skillTags}>
                                        {['SQL Server 7', '2000', 'Oracle 8i', '9i', '11i', 'DB2', 'SQL', 'PL/SQL', 'MySQL', 'Data Modeling', 'Data Warehousing'].map((db, idx) => (
                                            <span key={idx} className={styles.skillTag}>{db}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.techSection}>
                                    <h3>Testing Tools</h3>
                                    <div className={styles.skillTags}>
                                        {['Manual', 'Automation', 'Regression', 'Performance', 'Black Box', 'White Box', 'LoadRunner', 'WinRunner', 'Test Director', 'Custom Scripts', 'Junit', 'Selenium'].map((tool, idx) => (
                                            <span key={idx} className={styles.skillTag}>{tool}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.techSection}>
                                    <h3>System & Network Administrators</h3>
                                    <div className={styles.skillTags}>
                                        {['Windows-XP', '2k', '2k3', 'Unix-Aix', 'Solaris', 'HP-UX', 'Linux', 'NAS', 'SAN', 'Cisco', 'Netgear', 'TCP/IP', 'Nortel', 'Checkpoint', 'Novell'].map((sys, idx) => (
                                            <span key={idx} className={styles.skillTag}>{sys}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.techSection}>
                                    <h3>ERP & Business Processes</h3>
                                    <div className={styles.skillTags}>
                                        {['Oracle Application 11i', 'Siebel', 'Peoplesoft', 'SAP'].map((erp, idx) => (
                                            <span key={idx} className={styles.skillTag}>{erp}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
