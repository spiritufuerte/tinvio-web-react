import logoColor from '../../assets/image/logo-color.svg'
import React from 'react';
import classes from './Header.module.css';
import NavBar from "./NavBar/NavBar";


const Header = () => {


    return (
            <div className={classes.wrapper}>
                <div className={classes.header_block}>
                    <div className={classes.nav_wrapper}>
                        <div className={classes.color_logo}>
                        <img src={logoColor} alt="Logo" title="Logo"/>
                    </div>
                        <div className={classes.Rectangle}></div>
                        <NavBar/>
                    </div>
                    <button>Get Started</button>
                </div>
            </div>
    )
}

export default Header;
