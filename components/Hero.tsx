import ParticleCanvas from './ParticleCanvas';
import styles from '@/styles/Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero} id="home">
            <ParticleCanvas />
            <div className={styles.heroOverlay}></div>
            <div className={styles.heroContent}>
                <h1>Inspired Performance</h1>
                <p>Hire Better, Faster!</p>
                <a href="#contact" className={styles.ctaButton}>
                    Contact Us
                </a>
            </div>
        </section>
    );
}
