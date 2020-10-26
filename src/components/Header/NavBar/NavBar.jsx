import React from 'react';
import classes from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <a href="/#">Home</a>
            <a href="/#">Supplier</a>
            <a href="/#">About</a>
            <a href="/#">Contact</a>
        </nav>)
}

export default NavBar;