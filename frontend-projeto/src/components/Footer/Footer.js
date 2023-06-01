import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__redes'>
                <ul className='footer__redes__lista'>
                    <li>
                        <a href='https://github.com/marcosgregorio'>
                            <img className='footer__rede' src='/assets/github.svg' alt='Redes sociais' />
                        </a>
                    </li>
                    <li className='footer__redes__lista'>
                        <a href='https://instagram.com/marcosgsb'>
                            <img className='footer__rede' src='/assets/insta.png' alt='Redes sociais' />
                        </a>
                    </li>
                </ul>
            </div>
            <div className='footer__logo'>
                <a href='https://www.amplimed.com.br/'>
                    <img className='' src='https://www.amplimed.com.br/wp-content/uploads/2023/03/logo-amplimed.svg' alt='Redes sociais' />
                </a>
            </div>
        </footer>
    )
}

export default Footer;