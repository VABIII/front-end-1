import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'
import {logDOM} from "@testing-library/react";


const Header = () => {
    const token = localStorage.getItem('token');

    const onClick = evt => {
        console.log('Logout clicked')
    }

    return (
        <div className='header-container'>
            <div className='header-name'>
                <h1>Anywhere Fitness</h1>
            </div>
            <nav className='header-links'>
                <Link id='home' to='/'>Home</Link>
                {token && <Link id='classes' to='/classes'>Classes</Link>}
                {token && <Link onClick={onClick} id='logout' to='/logout'>Logout</Link>}
                {!token && <Link id='login' to='/login'>Login</Link>}
                {!token && <Link id='register' to='/register'>Signup</Link>}
            </nav>
        </div>
    );
};

export default Header;