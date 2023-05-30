import { useState } from 'react';
import InputSimple from '../InputSimple/InputSimple';
import './Form.css'
import Button from '../Button/Button';

const Form = () => {

    const [cep, setCep] = useState('')
    const [cidade, setCidade] = useState('')

    const buscar = (evento) => {
        evento.preventDefault();
        console.log('oi')
        fetch("http://api.weatherstack.com/current?access_key=b4f9dd2f3e54c4127a3618aa846dbdd0&query=New York")
            .then(res => res.json()).then(console.log)
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