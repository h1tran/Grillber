import React from 'react';
import './underline.scss';

export default function underline(props) {
    return (
        <a href={props.url} className="animation">
            <div className="left">
                <p className="font uber-color">{props.text}</p>
            </div>
        </a>
    );
};