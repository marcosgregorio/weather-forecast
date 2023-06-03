import { Formik, Field, Form, ErrorMessage } from "formik";
import { useEffect, useState } from 'react';
import './Formulario.css'
import alert from '../../helper/alertHelper'
import Swal from 'sweetalert2'
import Schema from "../../Schema";

const Formulario = (props) => {

    const buscarTemperatura = (values, actions) => {
        const params = {
            access_key: '54c7a3bcaccb0a761d12f9899e2c71d9',
            query: values.cidade
        }
        const url = `http://api.weatherstack.com/current?access_key=${params.access_key}&query=${params.query}`
        fetch(url)
            .then((responseApi) => responseApi.json())
            .then((json) => {
                console.log(json)
                const erroRequest = json.success == false
                if (erroRequest) {
                    exibeAlertaErro(params.query)
                    return;
                }
                const horario = formataDataHora(json.location.localtime)
                const linhaTabela = {
                    localidade: json.location.name,
                    iconeClima: json.current?.weather_descriptions[0],
                    temperatura: json.current.temperature + "°C",
                    velocidadeVento: json.current.wind_speed,
                    horario: horario,
                    ehDia: json.current.is_day,
                }

                props.adicionarTemperaturaTabela(linhaTabela)
            }).catch()
    }

    const exibeAlertaErro = (cidade) => {
        const msg = `Não foi encontrado dados para a cidade: ${cidade}`
        alert(msg)
    }
   
    const formataDataHora = (dataIso) => {
        let dataAux = dataIso.split(" ")
        let dataDia = dataAux[0]
        let horario = dataAux[1]
        dataDia = dataDia.split("-").reverse().join('/')
        return `${dataDia} ${horario}`
    }

    const onBlurCep = (evento, setFieldValue) => {
        let cep = evento.target.value
        const regex = /[^0-9]/g
        cep = cep?.replace(regex, '');

        if (cep?.length !== 8)
            return;
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((responseApi) => responseApi.json())
            .then((data) => {
                setFieldValue('cidade', data.localidade)
            })
    }

    return (
        <section className='section'>
            <Formik
                validationSchema={Schema}
                validateOnMount
                onSubmit={buscarTemperatura}
                initialValues={{
                    cep: '',
                    cidade: '',
                }}
            >
                {({ setFieldValue, isValid }) => (
                    <Form>
                        <h2> Previsão do tempo </h2>
                        <div className='formulario__input'>
                            <div className="field">
                                <label htmlFor="cep"> CEP </label>
                                <Field
                                    name="cep"
                                    type="text"
                                    onBlur={(ev) => onBlurCep(ev, setFieldValue)}
                                />
                                <ErrorMessage name="cep" />
                            </div>
                            <div className="field">
                                <label htmlFor="cidade"> CIDADE </label>
                                <Field
                                    name="cidade"
                                    type="text"
                                />
                                <ErrorMessage name="cep" />
                            </div>
                            <div className="botao">
                                <button type="submit" disabled={!isValid}> Buscar </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </section>
    )
}

export default Formulario;