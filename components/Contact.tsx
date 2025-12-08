'use client';

import { FormEvent } from 'react';
import ScrollReveal from './ScrollReveal';
import styles from '@/styles/Contact.module.css';

export default function Contact() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        e.currentTarget.reset();
    };

    return (
        <ScrollReveal>
            <section className={styles.contact} id="contact">
                <h2 className="section-title">Get In Touch</h2>
                <div className={styles.contactGrid}>
                    <div className={styles.contactInfo}>
                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}>📍</div>
                            <div>
                                <h4>Location</h4>
                                <p>
                                    4461 Alma Road, Suite 100
                                    <br />
                                    Mckinney, TX - 75070, USA
                                </p>
                            </div>
                        </div>
                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}>📞</div>
                            <div>
                                <h4>Phone</h4>
                                <p>+1 469-646-4574</p>
                            </div>
                        </div>
                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}>✉️</div>
                            <div>
                                <h4>Email</h4>
                                <p>hr@bnsinc.us</p>
                            </div>
                        </div>
                    </div>
                    <form className={styles.contactForm} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="your.email@example.com" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows={5} placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className={styles.submitButton}>
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </ScrollReveal>
    );
}
