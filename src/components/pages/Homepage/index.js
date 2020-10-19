import React from 'react';
import './homepage.scss';
import Shield from '../../../assets/shield-white-tablet-mobile-4.svg';

const Homepage = props => {
    return (
        <div className="flex-column">
            <div className="flex">
                <div className="container">
                    <h1>Grillber with care</h1>
                    <h3>Help keep each other safe</h3>
                    <p className="black">The health and safety of the Grillber community is always our priority. We are actively monitoring the coronavirus (COVID‑19) situation and are taking steps to help keep those that rely on our platform safe.</p>
                    <div className="button flex">
                        <p>Learn more</p>
                    </div>
                </div>
                <div>
                    <img src={Shield} alt="Shield" />
                </div>
            </div>
        </div>
    );  
};

export default Homepage;