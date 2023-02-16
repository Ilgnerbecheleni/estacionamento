import React from 'react'
import styles from './tablecliente.module.css'
export default function TableEstacionamento() {
  return (
    <div>
    <table className={styles.tabela}>
      <thead>
          <td>Cliente</td>
          <td>Tipo Veiculo</td>
          <td>Vaga</td>
          <td>Hora Entrada</td>
          <td>Hora Saida</td>
          <td>Valor</td>
      </thead>
      <tr key="dados">
          <td>Ilgner</td>
          <td>Carro</td>
          <td>23</td>
          <td>10:00</td>
          <td>13:00</td>
          <td>R$ 22</td>
      </tr>
  
    </table>



  </div>
  )
}
