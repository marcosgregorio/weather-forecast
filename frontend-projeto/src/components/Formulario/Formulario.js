import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState } from 'react';
import './Formulario.css'
import Schema from "../../Schema";

const Formulario = (props) => {
    const climas = {
        "Clear sky": 'https://ssl.gstatic.com/onebox/weather/64/sunny.png',
        "Partly cloudy": 'https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png',
        "Light rain": "https://ssl.gstatic.com/onebox/weather/64/rain_heavy.png",
        "Moderate rain": "https://ssl.gstatic.com/onebox/weather/64/rain_heavy.png",
        "Heavy rain": "https://ssl.gstatic.com/onebox/weather/64/rain_heavy.png"
    }

    const ehDia = {
        "yes": "https://github.com/marcosgregorio/weather-forecast/blob/c42eb7b9a42eb4971fa7a8f42b586145339c0158/frontend-projeto/public/assets/sun.png",
        "no": "https://cdn-icons-png.flaticon.com/128/581/581601.png"
    }

    const buscarTemperatura = (values, actions) => {
        const params = {
            access_key: '54c7a3bcaccb0a761d12f9899e2c71d9',
            query: values.cidade
        }
        const url = `http://api.weatherstack.com/current?access_key=${params.access_key}&query=${params.query}`
        fetch(url)
            .then((responseApi) => responseApi.json())
            .then((json) => {
                const horario = formataDataHora(json.location.localtime)
                const iconeClima = decideIconeClima(json.current?.weather_descriptions[0])
                const linhaTabela = {
                    localidade: json.location.name,
                    iconeClima: iconeClima,
                    temperatura: json.current.temperature + "°C",
                    velocidadeVento: json.current.wind_speed,
                    horario: horario,
                    ehDia: ehDia[json.current.is_day],
                }

                props.adicionarTemperaturaTabela(linhaTabela)
            })
    }

    const formataDataHora = (dataIso) => {
        let dataAux = dataIso.split(" ")
        let dataDia = dataAux[0]
        let horario = dataAux[1]
        dataDia = dataDia.split("-").reverse().join('/')
        return `${dataDia} ${horario}`
    }

    const decideIconeClima = (keyClima) => {
        return climas[keyClima] ? climas[keyClima] : climas["Clear sky"]
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