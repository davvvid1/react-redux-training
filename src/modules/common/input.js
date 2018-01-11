import _ from '../../lodashWrapper';
import React, {Component} from 'react';
import classNames from 'classnames';

const Input = (props) => {
    return (
        <div className="common-element input">
            <div className="wrapper">
                <div>{props.label}</div>
                <input value={props.value}
                       onChange={(event) => props.input.onChange(event.target.value)}
                       {...props}
                />
            </div>
        </div>
    );
};

export default Input;
