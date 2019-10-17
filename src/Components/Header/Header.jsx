import React, { Component } from 'react';
// import './header.scss'

// import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import Icon from './HamburgerMenu/Icon';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import Article from '../Common/Article';



class Header extends Component {
    render() {
        return (
            <header>
                <Article>
                    <div className='menu__wrapper'>
                        <div className='law_name'>
                            <h1>AGATA ROSZKIEWICZ-LEWICKA</h1>
                            <h2>Kancelaria Adwokacka</h2>
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <a href='/'>STRONA GŁÓWNA</a>
                                </li>
                                <li>
                                    <a href='/'>O KANCELARII</a>
                                </li>
                                <li>
                                    <a href='/'>SPECJALIZACJE</a>
                                </li>
                                <li>
                                    <a href='/'>REFERENCJE</a>
                                </li>
                                <li>
                                    <a href='/'>CENNIK</a>
                                </li>
                                <li>
                                    <a href='/'>KONTAKT</a>
                                </li>
                            </ul>
                        </nav>

                        {/* <HamburgerMenu /> */}
                        {/* <div className='hamburger'>
                        <Icon/>
                    </div> */}
                    </div>
                </Article>
                <div className='picture'>
                    <img src='https://adwokatura.krakow.pl/data/domains/1/pl/c_events_calendar/41/2533/images/logoadwokatura.png' />
                </div>
            </header>
        );
    }
}

export default Header; 