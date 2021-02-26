import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <a href="#"><img src={logo} alt="emma-john"/></a>
        </div>
    );
};

export default Header;