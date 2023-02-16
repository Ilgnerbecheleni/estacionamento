import React from 'react'
import imgbtn from './btn-add.png'
import styles from './botaoadicionar.module.css'

export default function BotaoAdicionar() {
  return (
    <div>
      <button className={styles.botaoadicionar}><img src={imgbtn} alt="botao adicionar" /></button>
    </div>
  )
}
