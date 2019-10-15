import React, { Component } from 'react';
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
            <div className='contact content'>
                <div className='contact__address'>
                    <h4><span><FontAwesomeIcon icon={faFacebookF} /></span> ADRES</h4>
                </div>
                

            </div>
         );
    }
}
 
export default Contact;