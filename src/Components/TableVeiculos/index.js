 import React from 'react'
 import styles from './tableveiculo.module.css'
 export default function TableVeiculos() {
   return (
    <div>
    <table className={styles.tabela}>
    <thead>
        <td>Placa</td>
        <td>Cliente</td>
        <td>Tipo</td>
        <td>Marca</td>
        <td>Modelo</td>
        <td>Cor</td>
    </thead>
    <tr key="veiculo">
        <td>FFZ5455</td>
        <td>Ilgner</td>
        <td>Carro</td>
        <td>GM</td>
        <td>Celta</td>
        <td>Prata</td>
    </tr>

  </table>



</div>
   )
 }
 