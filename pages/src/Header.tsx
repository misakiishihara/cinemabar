import styles from './header.module.css';
import React from 'react'

const Header = () => {
  return (
      <header className={styles.header}>
       <h1 className={styles.title}>CinemaBar</h1>
        <nav>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
          </ul>
        </nav>
      </header>
  )
}

export default Header