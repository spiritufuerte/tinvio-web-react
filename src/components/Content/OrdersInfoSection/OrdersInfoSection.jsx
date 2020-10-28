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
        <section className={classes.ordersSection}>
            <div className={classes.partnersWrapper}>
                <div className={classes.desktopVersionWrapper}>
                </div>
                <div className={classes.infoPartners}>Trusted by 1000+ partners across APAC</div>
                <div className={classes.imagesWrapper}>
                    <div className={classes.partnerImageWrapper}>
                        <img src={chickenLogo} alt="Lines" title="Lines"/></div>
                    <div className={classes.partnerImageWrapper}><img src={joliebeanLogo} alt="Lines" title="Lines"/>
                    </div>
                    <div className={classes.partnerImageWrapper}><img src={bensLogo} alt="Lines" title="Lines"/>
                    </div>
                    <div className={classes.partnerImageWrapper}><img src={simplyLogo} alt="Lines" title="Lines"/>
                    </div>
                    <div className={classes.partnerImageWrapper}><img src={italianLogo} alt="Lines" title="Lines"/>
                    </div>
                </div>
            </div>
            <div className={classes.orderText}>
                <div className={classes.orderHeaderText}>All your orders in one place</div>
                <div className={classes.mainOrderText}>Say no more to chunky emails and messy WhatsApp messages. Receive and manage your orders in one
                    platform
                </div>
            </div>
            <CarouselComponent/>
        </section>
    )
}

export default OrdersInfoSection;