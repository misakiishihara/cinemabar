import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Particle from './src/Particle'


const Home: NextPage = () => 
<>
<div className={styles.main}>
    <header className={styles.header}>
    <h1 className={styles.title}>CinemaBar</h1>
    <nav>
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
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
