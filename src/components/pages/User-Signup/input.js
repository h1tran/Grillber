import React from 'react';
import './input.scss';

const Input = props => {
    return (
        <div>
            <label className="font-signin label-font">{props.label}</label>
            <input className="font-signin" type="text" placeholder={props.inside}></input>
        </div>
    );
};

export default Input;