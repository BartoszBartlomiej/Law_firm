import React, { Component } from 'react';
import Article from '../Common/Article';

class Reference extends Component {
    render() {
        return (
            <Article>
                <div className='reference'>
                    <h3>REFERENCJE</h3>
                    <div className='reference__box'>
                        <div className='reference__box__info'>
                            <h4>IntoBeauty</h4>
                            <h4>Radosław Staważ - prezes</h4>
                            <div className='under_line' />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt provident aliquam distinctio neque delectus, reiciendis harum repudiandae beatae pariatur necessitatibus praesentium modi sed, eveniet quod cum commodi dolorum. Tempore, veritatis!</p>
                        </div>
                        <div className='reference__box__info'>
                            <h4>Szymon Piotr Sawicki eloo</h4>
                            <h4>Szymon Sawicki - właściciel</h4>
                            <div className='under_line' />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt provident aliquam distinctio neque delectus, reiciendis harum repudiandae beatae pariatur necessitatibus praesentium modi sed, eveniet quod cum commodi dolorum. Tempore, veritatis!</p>
                        </div>
                        {/* <div className='reference__box__info'>
                            <h4>IntoBeauty</h4>
                            <h4>Radosław Staważ - prezes</h4>
                            <div className='under_line' />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt provident aliquam distinctio neque delectus, reiciendis harum repudiandae beatae pariatur necessitatibus praesentium modi sed, eveniet quod cum commodi dolorum. Tempore, veritatis!</p>
                        </div> */}
                    </div>
                </div>
            </Article>
        );
    }
}

export default Reference;