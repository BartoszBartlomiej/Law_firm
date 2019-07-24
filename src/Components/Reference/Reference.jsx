import React, { Component } from 'react';

class Reference extends Component {
    render() {
        return (
            <div className='reference'>
                <div className='content'>
                    <h3>REFERENCJE</h3>
                    <div className='under_line' />
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
            </div>
        );
    }
}

export default Reference;