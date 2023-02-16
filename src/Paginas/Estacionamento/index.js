
import React from 'react'
import styles from './estacionamento.module.css'
import TableEstacionamento from '../../Components/TableEstacionamento'
import BotaoAdicionar from '../../Components/BotaoAdicionar'

export default function Estacionamento() {
  return (
    <div className={styles.estacionamento}>
      <h1>Estacionamento</h1>
      <BotaoAdicionar/>
      <TableEstacionamento/>
    </div>
  )
}
