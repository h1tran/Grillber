import React from 'react';
import './safety.scss';
import mask_illustration from '../../../assets/mask-cartoon.png';

const Safety = props => {
    return (
        <div className="background">
            <div className="safety-wrap">
                <div className="container flex-column">
                    <h1 className="title">Our approach to safety</h1>
                    <p className="font">We recognize that every time you open your Grillber app, you're putting your trust in our technology—to not only connect you with a driver, but to also give you resources in case of emergency. That trust is what drives us to continuously raise the bar, building new safety features, setting guidelines for respectful and positive experiences, and more.</p>
                    <p className="font">Whether you’re a renter, a rentee, or anyone who uses Grillber, your safety drives us.</p>
                </div>
            </div>
            <div className="safety-container">
                <h2 className="header-font">Helping to keep each other safe during COVID-19</h2>
                <p className="font">We’re actively monitoring the coronavirus (COVID-19) situation and are continually working to help keep those who rely on our platform healthy and safe.</p>
                <div className="flex">
                    <a href="#/Safety" className="animation">
                        <div className="left">
                            <p className="font">Go to Grillber’s COVID-19 Hub</p>
                        </div>
                    </a>
                    <a href="#/Safety" className="animation">
                        <div className="left">
                            <p className="font">Read about our new Door-to-Door Safety Standard</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="wash-container flex">
                <div className="flex">
                    <img src={mask_illustration} alt="COVID-19 Illustration" />
                    <div className="flex-column">
                        <h2 className="header-font white">Wash. Wear. Air.</h2>
                        <p className="font"> Wash or sanitize your hands. Wear a face cover or mask. Air out your ride. Follow these 3 simple steps on every ride and help us make it safe to move again.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Safety;