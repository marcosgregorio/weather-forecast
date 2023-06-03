import DataTable from "react-data-table-component"
import React, { useState, useEffect } from 'react';
import alert from '../../helper/alertHelper'
import './Tabela.css'
import Botao from "../Botao/Botao";
const Tabela = (props) => {

    const [loadingSalvando, setLoandingSalvando] = useState(false)
    const apiBackEnd = "http://127.0.0.1:8000/api/"
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
                        <span>{row.horario}</span>
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
        setLoandingSalvando(true)
        const params = { ...props.dadosTabela }
        fetch(`${apiBackEnd}salvarDados`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then((res) => res.json())
            .then((resposta) => {
                const sucesso = resposta[0] == "sucesso"
                if (sucesso) {
                    exibeAlertaSucesso()
                }
            })
            .finally(() => setLoandingSalvando(false))
    }

    const exibeAlertaSucesso = () => {
        let title, msg, icon, confirmButtonText = ''
        title = 'Sucesso ao salvar os dados!'
        msg = 'Parece que ocorreu tudo certo na hora de salvar os dados sobre o clima.'
        icon = 'success'
        confirmButtonText = 'OK'
        alert(title, msg, icon, confirmButtonText)
    }

   

    return (
        <section className="section__tabela">
            <DataTable
                progressPending={props.carregandoTabela}
                className="tabela"
                columns={columns}
                data={props.dadosTabela}
                noDataComponent="Nenhum dado disponível para amostrar :("
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