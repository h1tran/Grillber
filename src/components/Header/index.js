import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

const Header = props => {

    function showDropdownContent() {
        document.getElementById("myDropdown").classList.toggle("show");
        document.getElementById("bg-highlight").classList.toggle("bg-active");
    }

    // On click, if the element is NOT the button, then toggle "show" to remove dropdown.
    window.onclick = function(event) {
        if (!document.getElementById("bg-highlight").contains(event.target)) {
            if (document.getElementById("bg-highlight").classList.contains("bg-active")) {
                document.getElementById("bg-highlight").classList.toggle("bg-active");
                toggleArrow();
            }
            let dropdowns = document.getElementsByClassName("dropdown-content");
            for (let i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    function toggleArrow() {
        if (document.getElementById("arrow-down").classList.contains("fa-angle-down")) {
            document.getElementById("arrow-down").classList.remove("fa-angle-down");
            document.getElementById("arrow-down").classList.add("fa-angle-up");
        }
        else {
            document.getElementById("arrow-down").classList.remove("fa-angle-up");
            document.getElementById("arrow-down").classList.add("fa-angle-down");
        }
    }

    return (
        <header className="header">
            <div className="wrap flex-2">
                <div className="flex">
                    <Link to="/">
                        <p className="logo">Grillber</p>
                    </Link>
                    <div className="dropdown">
                        <div id="bg-highlight" className="hover flex flexgap-4" onClick={() => {
                            showDropdownContent();
                            toggleArrow();
                        }}>
                            <p>Company</p>
                            <i id="arrow-down" className="fas fa-angle-down fa-xs white"></i>
                        </div> 
                        <div id="myDropdown" className="transition-1s dropdown-content font">
                            <p>About us</p>
                            <p>Our offerings</p>
                            <p>How Grillber works</p>
                            <p>Global citizenship</p>
                            <p>Newsroom</p>
                            <p>Investor relations</p>
                            <p>Blog</p>
                            <p>Careers</p>
                        </div>
                    </div>
                    <Link to='/Safety'>
                        <div className="hover flex">
                            <p>Safety</p>
                        </div>
                    </Link>
                    <div className="hover flex">
                        <p>Help</p>
                    </div>
                    <div className="hover flex">
                        <p>COVID-19 Resources</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="hover flex">
                        <i className="fas fa-globe white"></i>
                        <p>EN</p>
                    </div>
                    <div className="hover flex">
                        <i className="far fa-circle white"></i>
                        <p>Products</p>
                    </div>
                    <div className="hover flex">
                        <i className="far fa-user white"></i>
                        <p>Log in</p>
                    </div>
                    <Link to="/User-Signup">
                        <div className="sign-up flex">
                            <p>Sign up</p>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;