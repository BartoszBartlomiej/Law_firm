import React, { Component } from 'react';
import Article from '../Common/Article';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import {
    faArrowLeft,
    faGlobeAmericas,
    faIgloo,
    faListUl,
    faPlane,
    faShare,
    faUser,
} from '@fortawesome/free-solid-svg-icons'

import { fab, faTwitter, faFacebookF, faYoutube, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'

class Contact extends Component {

    render() {
        return (
            <Article>
                <div className='contact'>
                    <div className='contact__address'>
                        <h4><span><FontAwesomeIcon icon={faFacebookF} /></span> ADRES</h4>
                    </div>
                </div>
            </Article>
        );
    }
}

export default Contact;