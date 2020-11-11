import logoColor from '../../assets/image/logo-color.svg';
import menuIcon from '../../assets/image/ico-24-menu.svg';
import React from 'react';
import classes from './Header.module.scss';
import NavBar from "./NavBar/NavBar";


const Header = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.header_block}>
                <div className={classes.nav_wrapper}>
                    <img src={logoColor} alt="Logo" title="Logo"/>
                    <div className={classes.line}>
                    </div>
                    <div className={classes.navbar_wrapper}>
                        <NavBar/>
                    </div>
                </div>
                <div className={classes.navbar_icon}>
                    <img src={menuIcon} alt="menu icon" title="menu icon"/>
                </div>
                <button className={classes.button}>Get Started</button>
            </div>
        </div>
    )
}

export default Header;
