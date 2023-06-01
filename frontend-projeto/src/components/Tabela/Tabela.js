import DataTable from "react-data-table-component"
import React, { useState, useEffect } from 'react';
import './Tabela.css'
const Tabela = (props) => {
    
    const columns = [
        {
            name: 'Condições Climáticas',
            cell: row => <img src={row.iconeClima} alt="Ícone" />,
        },
        {
            name: 'Localidade',
            selector: row => row.localidade,
            sortable: true
        },
        {
            name: 'Temperatura',
            selector: row => row.temperatura,
            sortable: true
        },
        {
            name: 'Velocidade do Vento:',
            selector: row => row.velocidadeVento,
        },
        {
            name: 'Hora do dia',
            cell: row => <img src="https://github.com/marcosgregorio/weather-forecast/blob/main/frontend-projeto/public/assets/sun.png" alt="Ícone" />,
            sortable: true
        },
    ];

    return (
        <section className="section__tabela">
            <DataTable
                className="tabela"
                columns={columns}
                data={props.dadosTabela}
            >
            </DataTable>
        </section>
        // <table>
        //     <thead>
        //         <tr>
        //             <th> Região </th>
        //             <th> Temperatura </th>
        //             <th> Precipitação </th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         <tr>
        //             <td>asdasdsa</td>
        //             <td>asdasdsa</td>
        //             <td>asdasdsa</td>
        //         </tr>
        //     </tbody>
        // </table>
    )

}

export default Tabela