import { Formik, Field, Form, ErrorMessage } from "formik";
import './Formulario.css'
import alert from '../../helper/alertHelper'
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
                const erroRequest = json.success == false
                if (erroRequest) {
                    exibeAlertaErroCidade(params.query)
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

    const exibeAlertaErroCidade = (cidade) => {
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
        const input = document.getElementById('field-cep')
        input.style.border = ''
        let cep = evento.target.value
        const regex = /[^0-9]/g
        cep = cep?.replace(regex, '');

        if (cep?.length !== 8) {
            input.style.border = '1px solid red'
            return;
        }
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((responseApi) => responseApi.json())
            .then((data) => {
                if (data.erro) {
                    exibeAlertaErroCep()
                    return
                }
                setFieldValue('cidade', data.localidade)
            }).catch(() => alert())
    }

    const exibeAlertaErroCep = (cep) => {
        let title, msg = ''
        title = "CEP informado inválido"
        msg = "Parece que não foi encontrado informações para o CEP: " + cep
        alert(title, msg)
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
                                    id="field-cep"
                                    name="cep"
                                    type="text"
                                    onBlur={(ev) => onBlurCep(ev, setFieldValue)}
                                />
                                <ErrorMessage name="cep" />
                            </div>
                            <div className="field">
                                <label htmlFor="cidade"> CIDADE* </label>
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