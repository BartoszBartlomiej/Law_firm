import React, { Component } from 'react';

import Block from './Block';
import Article from '../Common/Article';

class Specializations extends Component {
    render() {

        const data = [
            {
                title: 'prawo pracy',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae commodi delectus dignissimos enim fugiat illum molestias nobis repellat, suscipit.',
            },
            {
                title: 'prawo gospodarcze',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae commodi delectus dignissimos enim fugiat illum molestias nobis repellat, suscipit.',
            },
            {
                title: 'prawo autorskie',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae commodi delectus dignissimos enim fugiat illum molestias nobis repellat, suscipit.',
            },
            {
                title: 'prawo autorskie',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae commodi delectus dignissimos enim fugiat illum molestias nobis repellat, suscipit.',
            }

        ]

        const dataToDisplay = data.map(item => {
            return (
                <Block title={item.title} content={item.content} />
            )
        })



        return (
            <Article>
                <div className='specializations'>

                    <h3>SPECJALIZACJE</h3>
                    <div className='under_line' />
                    <div className='specializations__box'>


                        {dataToDisplay}

                        {/* <Block title="PRAWO PRACY" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae commodi delectus
                                dignissimos enim fugiat illum molestias nobis repellat, suscipit."/>

                        <div className="specializations__box__info">
                            <h4>PRAWO GOSPODARCZE</h4>
                            <div className='under_line' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae commodi delectus
                                dignissimos enim fugiat illum molestias nobis repellat, suscipit.</p>
                        </div>
                        <div className="specializations__box__info">
                            <h4>PRAWO AUTORSKIE</h4>
                            <div className='under_line' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae commodi delectus
                                dignissimos enim fugiat illum molestias nobis repellat, suscipit.</p>
                        </div>
                        <div className="specializations__box__info">
                            <h4>PRAWO CYWILNE</h4>
                            <div className='under_line' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae commodi delectus
                                dignissimos enim fugiat illum molestias nobis repellat, suscipit.</p>
                        </div>
                        <div className="specializations__box__info">
                            <h4>PRAWO RODZINNE</h4>
                            <div className='under_line' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae commodi delectus
                                dignissimos enim fugiat illum molestias nobis repellat, suscipit.</p>
                        </div>
                        <div className="specializations__box__info">
                            <h4>PRAWO ADMINISTRACYJNE</h4>
                            <div className='under_line' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae commodi delectus
                                dignissimos enim fugiat illum molestias nobis repellat, suscipit.</p>
                        </div>
                        <div className="specializations__box__info">
                            <h4>PRAWO KARNE</h4>
                            <div className='under_line' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae commodi delectus
                                dignissimos enim fugiat illum molestias nobis repellat, suscipit.</p>
                        </div>
                        <div className="specializations__box__info">
                            <h4>PRAWO MEDYCZNE</h4>
                            <div className='under_line' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae commodi delectus
                                dignissimos enim fugiat illum molestias nobis repellat, suscipit.</p>
                        </div>
                        <div className="specializations__box__info">
                            <h4>UMOWY HANDLOWE</h4>
                            <div className='under_line' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae commodi delectus
                                dignissimos enim fugiat illum molestias nobis repellat, suscipit.</p>
                        </div>
                        <div className="specializations__box__info">
                            <h4>SPADKI</h4>
                            <div className='under_line' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae commodi delectus
                                dignissimos enim fugiat illum molestias nobis repellat, suscipit.</p>
                        </div> */}
                    </div>

                </div>
            </Article>
        );
    }
}

export default Specializations;