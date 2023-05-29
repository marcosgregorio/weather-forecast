import './Button.css'

const Button = (props) => {
    return (
        <div className='botao'>
            <button>
                {props.children}
            </button>
        </div>
    )
}

export default Button;