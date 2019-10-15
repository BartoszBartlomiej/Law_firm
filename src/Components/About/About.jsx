import React, { Component } from 'react';
import Agata from '../../img/agata-01a.jpg';

import Article from '../Common/Article';

class About extends Component {
    render() {
        return (
            <Article>
                <div className='about'>

                    <div className='about__header'>
                        <h3>O KANCELARII</h3>
                        <div className='under_line' />
                    </div>
                    <div className='about__lawyer'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequatur delectus
                            excepturi voluptatibus. Ipsum, quae sapiente! Animi corporis dolorem esse facere facilis
                            iusto laudantium, mollitia neque, nisi non numquam perferendis porro repellendus
                            reprehenderit voluptatem? Animi eligendi error nemo non voluptates? Alias aut odio quisquam
                            voluptate? Aut consequuntur culpa deserunt doloribus eius et eum expedita fuga hic in
                            inventore iste magnam magni molestias nam neque, numquam quae quasi quibusdam, quo sint vel,
                            voluptate. Aliquam aperiam at blanditiis consequatur deserunt facilis molestias odit
                            officiis quasi temporibus, veritatis voluptatem voluptates? Blanditiis deleniti dignissimos
                            dolorem eos, est facere in iure molestias nesciunt, quaerat, vitae.
                        </p>
                        <img alt='Agata Roszkiewicz-Lewicka' src={Agata} />
                    </div>
                </div>
            </Article>
        );
    }
}

export default About;