import React from 'react';
import classes from "./OrdersInfoSection.module.scss";
import CarouselComponent from "./CarouselComponent/CarouselComponent";
import ImagesComponent from "./SwiperComponent/SwiperComponent";


const OrdersInfoSection = () => {
    return (
        <section className={classes.section}>
            <div className={classes.partners_wrapper}>
                <div className={classes.desktop_img}/>
                <h1>Trusted by 1000+ partners across APAC</h1>
                <ImagesComponent />
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