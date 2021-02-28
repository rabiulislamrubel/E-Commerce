import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className = 'logo-img'>
                <img src={logo} alt=""/>
            </div>
            <nav>
                <ul>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/ordered">Ordered</a></li>
                    <li><a href="/manage">Manage Summery</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;