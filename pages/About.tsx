import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Particle from './src/Particle';

const About = () => {
    return (
        <div className={styles.main}>
        <header className={styles.header}>
        <h1 className={styles.title}><Link href={"/"}>CinemaBar</Link></h1>
        <nav>
          <ul>
            <Link href={"/"}><li>HOME</li></Link>
            <li>ABOUT</li>
          </ul>
        </nav>
        </header>
        <div className={styles.contents}>
          Tell me your mood
        </div>
        <Particle/>
      </div>
    );
}

export default About;