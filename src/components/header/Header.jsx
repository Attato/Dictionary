import React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="header__content"><h1 className="header__logo">Word._Palindrome</h1>  </Link>            
        </div>
    )
}

export default Header;
