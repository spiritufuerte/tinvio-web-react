import React from 'react';
import classes from "./OrdersInfoSection.module.scss";
import chickenLogo from '../../../assets/image/image-logo-bottom-chicken@3x.png';
import joliebeanLogo from "../../../assets/image/image-logo-bottom-joliebean@3x.png";
import bensLogo from '../../../assets/image/image-logo-bottom-bens-cookies@3x.png';
import simplyLogo from '../../../assets/image/image-logo-bottom-simply-wraps@3x.png';
import italianLogo from '../../../assets/image/image-logo-bottom-italian-club@3x.png';
import CarouselComponent from "./CarouselComponent/CarouselComponent";


const OrdersInfoSection = () => {
    return (
        <section className={classes.section}>
            <div className={classes.partners_wrapper}>
                <div className={classes.desktop_img}>
                </div>
                <h1>Trusted by 1000+ partners across APAC</h1>
                <div className={classes.swipable_images}></div>
                <div className={classes.images_wrapper}>
                    <img src={chickenLogo} alt="Lines" title="Lines"/>
                    <img src={joliebeanLogo} alt="Lines" title="Lines"/>
                    <img src={bensLogo} alt="Lines" title="Lines"/>
                    <img src={simplyLogo} alt="Lines" title="Lines"/>
                    <img src={italianLogo} alt="Lines" title="Lines"/>
                </div>
            </div>
            <div className={classes.carousel_wrapper}>
                <div className={classes.text_block}>
                    <h1>All your orders in one place</h1>
                    <p>Say no more to chunky emails and messy WhatsApp messages. Receive
                        and manage your orders in one
                        platform
                    </p>
                </div>
                <CarouselComponent/>
            </div>
        </section>
    )
}

export default OrdersInfoSection;