import React, { Component } from 'react';
// import './header.scss'

// import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import Icon from './HamburgerMenu/Icon';


class Header extends Component {
    render() {
        return (
            <header>
                <div className='content'>
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
                                <a href='/'>BLOG</a>
                            </li>
                            <li>
                                <a href='/'>KONTAKT</a>
                            </li>
                        </ul>
                    </nav>
                    <div className='hamburger'>
                        <Icon/>
                    </div>
                </div>
                <div className='picture'/>
            </header>
        );
    }
}

export default Header; 