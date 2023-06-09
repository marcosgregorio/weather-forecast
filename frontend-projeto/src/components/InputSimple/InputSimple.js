import './InputSimple.css'

const InputSimple = (props) => {
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div title={props.titleInput} className='input'>
            <label>
                {props.label}
            </label>
            <input
                id={props.id}
                maxLength={props.maxLength}
                value={props.value} 
                required={props.obrigatorio}
                placeholder={props.placeholder + '...'}
                onChange={aoDigitado}
            />
        </div>
    )
}

export default InputSimple