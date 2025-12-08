import styles from '@/styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <h4>Quick Links</h4>
                    <a href="#home">Home</a>
                    <a href="#about">About Us</a>
                    <a href="#services">Services</a>
                    <a href="#solutions">Solutions</a>
                </div>
                <div className={styles.footerSection}>
                    <h4>Services</h4>
                    <a href="#services">Recruitment</a>
                    <a href="#services">Executive Search</a>
                    <a href="#services">IT Staffing</a>
                    <a href="#services">Outsourcing</a>
                </div>
                <div className={styles.footerSection}>
                    <h4>Contact Info</h4>
                    <p>
                        4461 Alma Road, Suite 100
                        <br />
                        Mckinney, TX - 75070, USA
                    </p>
                    <p>+1 469-646-4574</p>
                    <p>hr@bnsinc.us</p>
                </div>
            </div>
            <div className={styles.socialLinks}>
                <a href="https://www.facebook.com/people/BNS-International-Inc/100064875437965/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.socialIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                </a>
                <a href="https://x.com/bnsincus" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={styles.socialIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                </a>
            </div>
            <p className={styles.copyright}>© BNS International Inc | All Rights Reserved</p>
        </footer>
    );
}
