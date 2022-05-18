import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Particle from './src/particle'


const Home: NextPage = () => 
<>
  <div className='main'>
  <Particle/>
  </div>
</>

export default Home
