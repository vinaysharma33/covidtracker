import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

function Navbar() {
    return (
        <>
            <div id='nav-bar'>
                <h2 id='logo'>Covid Tracker</h2>
                <h3 id='slogan'>Stay home Stay safe</h3>
                <div id="right-nav">
                    <NavLink className='link' exact activeClassName='select' to='/'>Home</NavLink>
                    <NavLink className='link' activeClassName='select' to='/State'>State</NavLink>
                </div>
            </div>
        </>
    );
}

export default Navbar;