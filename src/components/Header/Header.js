import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <a href="#"><img src={logo} alt="emma-john"/></a>
            <nav className="d-flex flex-row">
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Inventory Management</a>
            </nav>
        </header>
    );
};

export default Header;