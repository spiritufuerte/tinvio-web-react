import React from 'react';
import classes from './FooterNavBar.module.scss';


const FooterNavBar = () => {
    return (
        <nav className={classes.nav}>
            <a href="/#">Home</a>
            <a href="/#">About</a>
            <a href="/#">Contact</a>
            <a href="/#">FAQ</a>
            <a href="/#">Blog</a>
            <a href="/#">Legal</a>
        </nav>)
}

export default  FooterNavBar;
