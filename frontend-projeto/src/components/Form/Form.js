import axios from "axios";
import { useState } from 'react';
import InputSimple from '../InputSimple/InputSimple';
import './Form.css'
import Button from '../Button/Button';

const Form = () => {

    const [cep, setCep] = useState('')
    const [cidade, setCidade] = useState('')

    const buscar = (evento) => {
        evento.preventDefault();
        const url = "http://api.weatherstack.com/forecast"
        const params = {
            access_key: '54c7a3bcaccb0a761d12f9899e2c71d9',
            query: 'New York'
        }
        const regexCep = '\d{3}[.\s]?\d{3}[.\s]?\d{3}[-.\s]?\d{2}'

        console.log(url, params)
        axios.get(url, { params })
            .then(response => {
                const apiResponse = response.data;
                console.log(apiResponse);
                // console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
            }).catch(error => {
                console.log(error);
            }).finally(() => console.log('finalizado'));
    }

    return (
        <section className='section'>
            <form className='formulario' onSubmit={buscar}>
                <h2> Previsão do tempo </h2>
                <div className='formulario__input'>
                    <InputSimple
                        value={cep}
                        aoAlterado={value => setCep(value)}
                        placeholder={"Digite seu CEP"}
                        label={"CEP:"}
                        obrigatorio={false}
                    />
                    <InputSimple
                        value={cidade}
                        aoAlterado={value => setCidade(value)}
                        placeholder={"Digite sua cidade"}
                        label={"Cidade:"}
                        obrigatorio={false}
                    />
                    <Button>
                        Buscar
                    </Button>
                </div>
            </form>
        </section>
    )
}

export default Form;