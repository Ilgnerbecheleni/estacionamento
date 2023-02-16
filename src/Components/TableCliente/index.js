import React from 'react'
import styles from './tablecliente.module.css'
export default function TableCliente() {
  return (
    <div>
      <table className={styles.tabela}>
        <thead>
            <td>Nome</td>
            <td>E-mail</td>
            <td>Endereço</td>
            <td>Telefone</td>
        </thead>
        <tr key="dados">
            <td>ilgner</td>
            <td>ilgner@ilgner</td>
            <td>rua ilgner</td>
            <td>98-0000-0000</td>
        </tr>
    
      </table>



    </div>
  )
}
