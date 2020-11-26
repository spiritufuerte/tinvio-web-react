import React from 'react';
import operationalCostsImage from '../../../../assets/image/Carousel/Operational Costs.png';
import ordersImage from '../../../../assets/image/Carousel/Orders.png';
import analyticsImage from '../../../../assets/image/Carousel/Analytics.png';
import SwiperCore, {Navigation, Pagination, A11y} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import classes from './Carousel.module.scss';

SwiperCore.use([Navigation, Pagination, A11y]);

const CarouselComponent = (props) => {

    return (
        <div className={classes.carousel}>
            <div className={classes.carousel_img_bg}>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }}
                    pagination={{
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true
                    }}
                >
                    <SwiperSlide>
                        <div className={classes.img_wrapper}><img src={ordersImage} alt='some'/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={classes.img_wrapper}><img src={operationalCostsImage} alt='some'/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={classes.img_wrapper}><img src={analyticsImage} alt='some'/></div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={classes.circles_wrapper}>
                <div className={`${classes.circle} ${classes.swiper_button_prev} swiper-button-prev`}/>
                <div className={classes.indicator_wrapper}>
                    <div className={`${classes.swiper_pagination} swiper-pagination`}/>
                </div>
                <div className={`${classes.circle} ${classes.swiper_button_next} swiper-button-next`}/>
            </div>
        </div>
    )
}

export default CarouselComponent;