import logoColor from '../../assets/image/logo-color.svg'
import React from 'react';
import classes from './Header.module.css';
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
                <button>Get Started</button>
            </div>
        </div>
    )
}

export default Header;
