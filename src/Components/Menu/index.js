import React from 'react'
import { Link } from 'react-router-dom';
import styles from './menu.module.css';
import MenuLink from '../Menulink';
import logo from './logo.png'

export default function Menu() {
  return (
    <>
    
    <nav className={styles.menu}>
    <section>
<img src={logo} alt="logo" />
<h2 className={styles.title}>Estacionamento</h2>
    </section>
      <MenuLink to={"/"} className={styles.menulink}>Home</MenuLink>
      <MenuLink to={"/estacionamento"} className={styles.menulink}>Estacionamento</MenuLink>
      <MenuLink to={"/clientes"} className={styles.menulink}>Clientes</MenuLink>
      <MenuLink to={"/Veiculos"} className={styles.menulink}>Veiculos</MenuLink>

      
    </nav>
    </>
  )
}
