import React from 'react';
import classes from './Footer.module.scss';
import logoWhite from "../../assets/image/logo-white.svg";
import logoInst from "../../assets/image/Social/icon-24-social-inst.svg";
import logoLink from "../../assets/image/Social/icon-24-social-linkedin.svg";
import FooterNavBar from "./FooterNavBar/FooterNavBar";
import appleStoreImg from '../../assets/image/app-store-badge.svg';
import googleStoreImg from '../../assets/image/google-play-badge.svg';

const Footer = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.header_block}>
                <div className={classes.nav_wrapper}>
                    <div className={classes.color_logo}>
                        <img src={logoWhite} alt="Logo" title="Logo"/>
                    </div>
                    <div className={classes.Rectangle}>
                    </div>
                    <div className={classes.navBarWrapper}>
                        <FooterNavBar/>
                    </div>
                    <div className={classes.Rectangle}>
                    </div>
                    <div className={classes.social_logo}>
                        <img src={logoInst} alt="Logo" title="Logo"/>
                    </div>
                    <div className={classes.social_logo}>
                        <img src={logoLink} alt="Logo" title="Logo"/>
                    </div>
                </div>
                <div className={classes.store_images}>
                    <div className={classes.store_wrapper}>
                        <img src={appleStoreImg} alt="Logo" title="Logo"/>
                    </div>
                    <div className={classes.store_wrapper}>
                        <img src={googleStoreImg} alt="Logo" title="Logo"/>
                    </div>
                </div>
                <div className={classes.info_company}>© Tinvio™ 2019. All Rights Reserved</div>
            </div>
        </div>
    )
}

export default Footer;
