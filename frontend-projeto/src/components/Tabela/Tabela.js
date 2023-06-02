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
            cell: row => {
                return <div className="horario"> {row.horario} <img className="icone-eh-dia" src="https://cdn-icons-png.flaticon.com/128/581/581601.png" alt="Ícone" /></div>
            },
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
    )

}

export default Tabela