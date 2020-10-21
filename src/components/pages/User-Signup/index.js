import React from 'react';
import './signup.scss';

import Input from './input.js';
import Boat from './boat.js';

const Signup = props => {
    return (
        <div className="bg-signin">
            <div className="bg-pattern">
            </div>
            <div className="flex column">
                <div className="bg-square flex">
                    <p className="logo">Grillber</p>
                </div>
                <div className="form-container flex column">
                    <p className="font-header-signin uber-color">Sign Up to Rent</p>
                    <p className="font-signin uber-color">Rentable grills in minutes</p>
                </div>
            </div>
            <div className="form-container flex column">
                <div className="flex">
                    <Input label="First name (required)" inside="First name" />
                    <Input label="Last name (required)" inside="Last name"/>
                </div>
                <i class="icon-signin icon-phone fas fa-mobile-alt fa-sm"></i>
                <div className="flex up-position">
                    <Input label="Enter your phone number (required)" inside="Phone Number" />
                </div>
                <i class="icon-signin fas fa-envelope fa-sm"></i> 
                <div className="flex up-position">
                    <Input label="Enter your email (required)" inside="Email" />
                </div>
                <i class="icon-signin fas fa-lock fa-sm"></i> 
                <div className="flex up-position">
                    <Input label="Enter your password (required)" inside="Password" />
                </div>
            </div>
            <div className="form-container flex column">
                <div className="flex">
                    <div className="flex sign-up-button text-left">
                        <p className="font-signin sign-font">SIGN UP</p>
                    </div>
                </div>
                <div className="flex">
                    <p className="uber-color disclaimer">By clicking "Sign Up", you agree to Grillber's Terms of Use and acknowledge you have read the Privacy Policy. You also consent to receive calls or SMS messages, including by automated dialer, from Grillber and its affiliates to the number you provide for informational and/or marketing purposes. Consent to receive marketing messages is not a condition to use Grillber’s services. You understand that you may opt out by texting “STOP” to 89203.</p>
                </div>
            </div>
            <div className="boat">
                <Boat />
            </div>
            <div className="boat-ground">
            </div>
        </div>
    );
};

export default Signup;