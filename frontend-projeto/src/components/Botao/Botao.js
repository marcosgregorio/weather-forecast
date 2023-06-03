import './Botao.css'

const Botao = (props) => {
    return (
        <div className="botao__personalizado">
            <button onClick={props.clicado}>
                {props.children}
            </button>
        </div>
    )
}

export default Botao