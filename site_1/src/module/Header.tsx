import React from "react";
import Logo from '../styles/images/backgrounds/logo Background Removed.png';
import Burger from '../styles/images/HeaderImages/burger-menu.svg'

class Header extends React.Component {
    render () {
        return (
            <header className='header'>
                <nav className='nav'>
                    <div className='header-up-left-part'>
                        <ol className='left-up-part-header-info-list'>
                            <ul className='left-up-part-header-info'>
                                <a href="#">О нас</a>
                            </ul>
                            <ul className='left-up-part-header-info'>
                                <a href="#">Услуги</a>
                            </ul>

                            <ul className='left-up-part-header-info'>
                                <a href="#">Контакты</a>
                            </ul>
                        </ol>

                        <span className="material-symbols-outlined">
                            menu
                        </span>

                    </div>

                    <div className='burger-menu'>
                        <img src={Burger} alt="burger"/>
                    </div>

                    <div className='center-up-part-header-logo'>
                        <img src={Logo} alt="" id='logo-png'/>
                    </div>

                    <div className='right-up-part-header'>
                        <ol className='right-up-part-header-img-list'>
                            <ul className='right-up-part-header-image'>
                                <a href="#">img</a>
                            </ul>
                            <ul className='right-up-part-header-image'>
                                <a href="#">img</a>
                            </ul>
                            <ul className='right-up-part-header-image'>
                                <a href="#">img</a>
                            </ul>

                        </ol>
                    </div>
                </nav>

                <div className='sub-header'>
                    <h1 className='sub-header-title'>Заголовок сайта</h1>
                    <h2 className='sub-header-sub-title'>
                        Добавьте интересные подробности о вашей компании.
                    </h2>
                    <button className='sub-header-button'>
                        Призыв к действию
                    </button>
                </div>

            </header>
        )
    }
}


export default Header;