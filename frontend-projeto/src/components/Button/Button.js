import './Button.css'

const Button = (props) => {
    return (
        <div className='botao'>
            <button type="submit" disabled={props.isValid}>
                {props.children}
            </button>
        </div>
    )
}

export default Button;