import React, {Component} from 'react';

const Tag = (props) => {
    return (
        <div className={`common-element tag ${props.className}`}>
            <span>{props.text}</span>
        </div>
    );
};

export default Tag;
