import DataTable from "react-data-table-component"
import React, { useState, useEffect } from 'react';
import './Tabela.css'
import Botao from "../Botao/Botao";
const Tabela = (props) => {

    const climas = {
        "Clear sky": "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
        "Partly cloudy": "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
        "Light rain": "https://ssl.gstatic.com/onebox/weather/64/rain_heavy.png",
        "Moderate rain": "https://ssl.gstatic.com/onebox/weather/64/rain_heavy.png",
        "Heavy rain": "https://ssl.gstatic.com/onebox/weather/64/rain_heavy.png",
        "Overcast": "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
    }

    const ehDia = {
        "yes": "https://cdn-icons-png.flaticon.com/128/5903/5903519.png",
        "no": "https://cdn-icons-png.flaticon.com/128/581/581601.png"
    }

    const columns = [
        {
            name: 'Condições Climáticas',
            cell: row => <img src={decideIconeClima(row.iconeClima)} alt="Ícone" />,
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
                return (
                    <div className="horario">
                        {row.horario}
                        <img className="icone-eh-dia" src={ehDia[row.ehDia]} alt="Ícone" />
                    </div>
                )
            },
            sortable: true
        },
    ];


    const decideIconeClima = (keyClima) => {
        return climas[keyClima] ? climas[keyClima] : climas["Clear sky"]
    }

    const salvarDadosTabela = () => {
        
    }

    return (
        <section className="section__tabela">
            <DataTable
                className="tabela"
                columns={columns}
                data={props.dadosTabela}
            >
            </DataTable>
            {
                props.dadosTabela.length > 0 &&
                    <div className="section__botao__salvar">
                        <Botao clicado={salvarDadosTabela}>
                            Salvar
                        </Botao>
                    </div>
            }
        </section>
    )

}

export default Tabela