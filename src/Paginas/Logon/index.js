import React from 'react'
import { Link } from 'react-router-dom'
import styles from './logon.module.css'
import imglogo from './logo-inicial.png'

export default function Logon() {
  return (
    <div className={styles.logon}>
      <h1>I - Parking</h1>
      <img src={imglogo} alt="" />
      <p>A solução para seu negócio , gerencie seu estacionamento!</p>
      <div className={styles.btnentrar}><Link to={'/est/home'}>Entrar</Link></div>
      
    </div>
  )
}
