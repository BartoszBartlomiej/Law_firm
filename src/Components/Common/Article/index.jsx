import React from 'react';
import './article.scss';

const Article = (props) => {
    return (
        <div className="article__wrapper">
            <div className='content'>
                {props.children}
            </div>
        </div>
    );
}

export default Article;