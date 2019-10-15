import React from 'react';
import "./block.scss";

const Block = (props) => {

    return (
        <div className="box">
            <h4 className="box__title">{props.title}</h4>
            <p className="box__content">{props.content}</p>
        </div>
    );
}

export default Block;


