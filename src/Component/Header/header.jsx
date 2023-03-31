import React from 'react';
import logo from '../../assets/images/Logo.svg'
import './header.css'
const Header = () => {
    return (
        <div className='header'>
           <img src={logo}></img>
           <div>
            <a href="/Order">Order</a>
            <a href="/Order Review">Order Rev iew</a>
            <a href="/manage inventory ">Manage Inventory</a>
            <a href="/Login">Login</a>
           </div>
        </div>
    );
};

export default Header;