import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <a href="#"><img src={logo} alt="emma-john" /></a>
            <div className="bg-dark">
                <nav className="d-flex flex-row container bg-dark">
                    <a href="/shop">Shop</a>
                    <a href="/review">Order Review</a>
                    <a href="/manage">Inventory Management</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;