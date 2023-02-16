import React from 'react'
import styles from './clientes.module.css'
import TableCliente from '../../Components/TableCliente'
import BotaoAdicionar from '../../Components/BotaoAdicionar'
export default function Clientes() {
  return (
    <div className={styles.clientes}>
      <h1>Clientes</h1>
      <BotaoAdicionar/>
      <TableCliente/>
    </div>
  )
}
