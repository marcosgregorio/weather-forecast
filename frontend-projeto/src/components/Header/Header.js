import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="logo__header">
                <img src='/assets/weather.png' />
            </div>
            <div className='header__titulo'>
                <h1>Weather Forecast</h1>
            </div>
            <input type="checkbox" id="menu" className="container__botao" />
             <ul className="lista-menu">
                <li className="lista-menu__item">
                    <a href='https://github.com/marcosgregorio'> Home </a>
                </li>
                <li className="lista-menu__item">
                    <a href='https://github.com/marcosgregorio'> Clima hoje </a>
                </li>
                <li className="lista-menu__item">
                    <a href='https://github.com/marcosgregorio'> Sobre nós </a>
                </li>
                <li className="lista-menu__item">
                    <a href='https://github.com/marcosgregorio'> Contato </a>
                </li>
            </ul>
            <label htmlFor='menu'>
                <span className="header__menu-hamburguer"></span>
            </label>
            <div className='navigation__header'>
                <a href='https://github.com/marcosgregorio'> Home </a>
                <a href='https://github.com/marcosgregorio'> Clima hoje </a>
                <a href='https://github.com/marcosgregorio'> Sobre nós </a>
                <a href='https://github.com/marcosgregorio'> Contato </a>
            </div>
        </div>
    )
}

export default Header