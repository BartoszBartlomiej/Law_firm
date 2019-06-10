import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

import HamburgerMenu from './HamburgerMenu';

class Icon extends Component {
    render() {
        return (
            <div className='bm-burger-button dupa'>
                <button>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <HamburgerMenu />
            </div>
        );
    }
}

export default Icon;