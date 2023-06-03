import { useState } from 'react'
import InputSimple from '../InputSimple/InputSimple'
import './Filtro.css'
import alert from '../../helper/alertHelper'
import { Button } from 'reactstrap'
import Botao from '../Botao/Botao'

const Filtro = (props) => {
    const [valorFiltro, setValorFiltro] = useState('')
    const apiBackEnd = "http://127.0.0.1:8000/api/"

    const consultarDados = async () => {
        const input = document.getElementById('input__filtro')
        input.style.border = ''
        if (!valorFiltro) {
            input.style.border = '1px solid red'
            return
        }
        const params = { localidade: valorFiltro }
        await fetch(`${apiBackEnd}getDadosTabela/${params.localidade}`)
            .then((response) => response.json())
            .then((dados) => {
                if (dados.length > 0) {
                    criaObjetoTabela(dados)
                } else {
                    let title, msg = ''
                    title = "Ops!"
                    msg = "Não há dados para essa consulta!"
                    alert(title, msg)
                }
            })
    }

    const criaObjetoTabela = (dados) => {
        let dadosTabela = []
        for (const key in dados) {
            const obj = {
                'ehDia': dados[key].eh_dia,
                'horario': dados[key].horario,
                'iconeClima': dados[key].icone_clima,
                'localidade': dados[key].localidade,
                'temperatura': dados[key].temperatura,
                'velocidadeVento': dados[key].velocidade_vento
            }
            dadosTabela.push(obj)
        }
        props.mudaConsultaTabela(dadosTabela)
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
            <Botao clicado={consultarDados}>
                Buscar Tabela
            </Botao>
        </div>
    )
}

export default Filtro