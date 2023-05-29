import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div class="logo__header">
                <img src='/assets/weather.png' />
            </div>
            <div className='header__titulo'>
                <h1>Weather Forecast</h1>
            </div>
            <input type="checkbox" id="menu" class="container__botao" />
             <ul class="lista-menu">
                <li class="lista-menu__item">
                    <a href='https://github.com/marcosgregorio'> Home </a>
                </li>
                <li class="lista-menu__item">
                    <a href='https://github.com/marcosgregorio'> Clima hoje </a>
                </li>
                <li class="lista-menu__item">
                    <a href='https://github.com/marcosgregorio'> Sobre nós </a>
                </li>
                <li class="lista-menu__item">
                    <a href='https://github.com/marcosgregorio'> Contato </a>
                </li>
            </ul>
            <label for="menu">
                <span class="header__menu-hamburguer"></span>
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