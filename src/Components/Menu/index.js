import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import styles from './menu.module.css';
import MenuLink from '../Menulink';
import logo from './logo.png'

export default function Menu() {
  return (
    <>
    <Outlet/>
    <nav className={styles.menu}>
    <section>
<img src={logo} alt="logo" />
<h2 className={styles.title}>Estacionamento</h2>
    </section>
      <MenuLink to={"/est/home"} className={styles.menulink}>Home</MenuLink>
      <MenuLink to={"/est/estacionamento"} className={styles.menulink}>Estacionamento</MenuLink>
      <MenuLink to={"/est/clientes"} className={styles.menulink}>Clientes</MenuLink>
      <MenuLink to={"/est/Veiculos"} className={styles.menulink}>Veiculos</MenuLink>
      <MenuLink to={"/"} className={styles.sair}>Sair</MenuLink>
      
    </nav>

    </>
  )
}
