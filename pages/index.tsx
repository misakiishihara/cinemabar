import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Header from './src/Header';
import Particle from './src/Particle';


const Home: NextPage = () => 
<>
  <div className={styles.main}>
    <Header/>
    <div className={styles.contents}>
      Tell me your mood
    </div>
    <div className={styles.hiddenbox}>
      <Link href={'/'}>
        <a>Happy</a>
      </Link>
      <Link href={'/'}>
        <a>Sad</a>
      </Link>
    </div>
    <Particle/>
  </div>
</>

export default Home
