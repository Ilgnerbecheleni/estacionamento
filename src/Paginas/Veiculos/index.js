import React from 'react'
import styles from './veiculos.module.css'
import BotaoAdicionar from '../../Components/BotaoAdicionar'
import TableVeiculos from '../../Components/TableVeiculos'
export default function Veiculos() {
  return (
    <div className={styles.veiculos}>
      <h1>Veiculos</h1>
      <BotaoAdicionar/>
      <TableVeiculos/>
    </div>
  )
}
