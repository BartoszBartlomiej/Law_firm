import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'


class HamburgerMenu extends Component {
    render() { 
        return (
            <div>
                <Menu id='slide'>
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
                </Menu>

            </div>
          );
    }
}
 
export default HamburgerMenu;