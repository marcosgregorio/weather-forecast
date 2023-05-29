import { useState } from 'react';
import InputSimple from '../InputSimple/InputSimple';
import './Form.css'
import Button from '../Button/Button';

const Form = () => {

    const [cep, setCep] = useState('')
    const [cidade, setCidade] = useState('')


    return (
        <section className='section'>
            <form className='formulario'>
                <h2> Previsão do tempo </h2>
                <div className='formulario__input'>
                    <InputSimple 
                        value={cep} 
                        aoAlterado={value => setCep(value)}
                        placeholder={"Digite seu CEP"}
                        label={"CEP:"}
                    />
                    <InputSimple 
                        value={cidade} 
                        aoAlterado={value => setCep(cidade)}
                        placeholder={"Digite sua cidade"}
                        label={"Cidade:"}
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