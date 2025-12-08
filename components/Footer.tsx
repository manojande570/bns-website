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
                <a href="#">📘</a>
                <a href="#">🐦</a>
                <a href="#">💼</a>
            </div>
            <p className={styles.copyright}>© BNS International Inc | All Rights Reserved</p>
        </footer>
    );
}
