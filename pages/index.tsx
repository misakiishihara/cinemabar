import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Particle from './src/Particle'
import About from './About'


const Home: NextPage = () => 
<>
<div className={styles.main}>
    <header className={styles.header}>
    <h1 className={styles.title}>CinemaBar</h1>
    <nav>
      <ul>
        <Link href={"/"}><li>HOME</li></Link>
        <Link href={'About'}><li>ABOUT</li></Link>
      </ul>
    </nav>
    </header>
    <div className={styles.contents}>
      Tell me your mood
    </div>
    <Particle/>
  </div>
</>

export default Home
