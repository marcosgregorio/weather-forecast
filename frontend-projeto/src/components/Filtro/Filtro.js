import React from 'react';
import { useState } from 'react'
import InputSimple from '../InputSimple/InputSimple'
import './Filtro.css'
import Modal from 'react-modal';
import alert from '../../helper/alertHelper'
import Botao from '../Botao/Botao'
import DataTable from 'react-data-table-component';
import Divisoria from '../Divisoria/Divisoria';


const Filtro = (props) => {
    const customStyles = {
        content: {
            width: '100%',
            top: '42%',
            left: '50%',
            right: 'auto',
            bottom: '-20%',
            marginRight: '50%',
            transform: 'translate(-50%, -50%)',
        },
    };

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
            name: 'Data',
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

    const [valorFiltro, setValorFiltro] = useState('')
    const [toggledClearRows, setToggleClearRows] = React.useState(false);
    const apiBackEnd = "http://127.0.0.1:8000/api/"
    const [dadosTabela, setDadosTabela] = React.useState([]);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [loadingTabela, setLoadingTabela] = React.useState(false);

    const consultarDados = async () => {
        const input = document.getElementById('input__filtro')
        input.style.border = ''
        if (!valorFiltro) {
            input.style.border = '1px solid red'
            return
        }
        props.carregando(true)
        const params = { localidade: valorFiltro }
        await fetch(`${apiBackEnd}getDadosTabela/${params.localidade}`)
            .then((response) => response.json())
            .then((dados) => {
                if (dados.length > 0) {
                    props.mudaConsultaTabela(dados)
                }
            }).catch(() => {
                let title, msg = ''
                title = "Ops!"
                msg = "Não há dados para essa consulta!"
                alert(title, msg)
            })
            .finally(() => props.carregando(false))
    }

    const comparaClimas = (selectedRows) => {
        if (selectedRows.selectedCount == 2) {
            let primeiroSelecionado = selectedRows.selectedRows[1]
            let segundosSelecionado = selectedRows.selectedRows[0]
            geraAlertasClimasComparados(primeiroSelecionado, segundosSelecionado)
            setToggleClearRows(!toggledClearRows)
        }
    }

    const geraAlertasClimasComparados = (primeiroSelecionado, segundosSelecionado) => {
        const regex = /\d+/g
        const grausPrimeiroSelecionado = primeiroSelecionado.temperatura.match(regex)
        const grausSegundosSelecionado = segundosSelecionado.temperatura.match(regex)
        const diff = Math.abs(grausSegundosSelecionado - grausPrimeiroSelecionado)
        let title, msg, icon, button = ''
        title = "Climas comparados!"
        msg = `
            A diferença de temperatura entre 
            a cidade ${segundosSelecionado.localidade} e a cidade ${primeiroSelecionado.localidade} 
            é de: ${diff}°C`
        icon = 'success'
        button = 'Ok'
        alert(title, msg, icon, button)
    }

    const openModal = () => {
        setIsOpen(true)
        pegaDadosSalvos()
    }

    const pegaDadosSalvos = () => {
        setLoadingTabela(true)
        fetch(`${apiBackEnd}getTodosClimas`)
            .then((res) => res.json())
            .then((resposta) => {
                if (resposta.dados.length > 0) {
                    setDadosTabela(resposta.dados)
                }
            })
            .catch(() => alert())
            .finally(() => setLoadingTabela(false))
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <div className='filtro'>
            <InputSimple
                id="input__filtro"
                titleInput='Consulte previsões do tempo 
                    salvas anteriormente'
                label='Consultar Por Localidade'
                placeholder='Consultar'
                aoAlterado={valor => setValorFiltro(valor)}
            />
            <div className='filtro__botoes'>
                <Botao clicado={consultarDados}>
                    Buscar Tabela
                </Botao>

                <Botao clicado={openModal}>Climas Salvos</Botao>
            </div>
            <Modal
                style={customStyles}
                ariaHideApp={false}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <section className='section__modal'>
                    <div className="close-button">
                        <span onClick={closeModal}> &times; </span>
                    </div>
                    <h3>Todos os climas salvos</h3>
                    <Divisoria />
                    {
                        dadosTabela.length > 0 ?
                            (<div>
                                <span>
                                    Selecione duas tuplas    para comparar seus climas.
                                </span>
                                <DataTable
                                    progressPending={loadingTabela}
                                    noDataComponent="Nenhum dado disponível para amostrar :("
                                    className="tabela"
                                    selectableRows
                                    selectableRowsNoSelectAll
                                    onSelectedRowsChange={comparaClimas}
                                    clearSelectedRows={toggledClearRows}

                                    columns={columns}
                                    data={dadosTabela}
                                />
                            </div>) : (
                                <div className='sem-dados__modal'>
                                    Parece que não há dados salvos.
                                    Pesquise sua cidade e salve ela
                                    para que possamos colocar aqui!! 😉
                                </div>
                            )
                    }
                </section>

            </Modal>
        </div>
    )
}

export default Filtro