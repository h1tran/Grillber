import React from 'react';
import './styles.scss';

const Header = props => {
    return (
        <header className="header">
            <div className="wrap flex">
                <p className="logo">Grillber</p>
                <div className="hover flex">
                    <p>Company</p>
                    <i class="fas fa-angle-down"></i>
                </div>
                <div className="hover flex">
                    <p>Safety</p>
                </div>
                <div className="hover flex">
                    <p>Help</p>
                </div>
                <div className="hover flex">
                    <p>COVID-19 Resources</p>
                </div>
            </div>
        </header>
    );
};

export default Header;