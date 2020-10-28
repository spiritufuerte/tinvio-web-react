import React from 'react';
import classes from './Carousel.module.scss';
import analyticsImage from '../../../../assets/image/Carousel/Analytics.png';
import operationalCostsImage from '../../../../assets/image/Carousel/Operational Costs.png';
import ordersImage from '../../../../assets/image/Carousel/Orders.png';
import arrowLeft from "../../../../assets/image/icon-24-chevron1.svg";
import arrowRight from "../../../../assets/image/icon-24-chevron.svg";


const CarouselComponent = (props) => {

    const imagesUrl = [
        {url: analyticsImage},
        { url: operationalCostsImage},
        {url: ordersImage},
    ]



    return (
        <div className={classes.carousel}>
            <div className={classes.circles}>
                <div className={classes.circlesWrapper}>
                    <div className={classes.circle}>
                        <img src={arrowLeft} alt="arrowLeft" title="arrowLeft"/>
                    </div>
                    <div className={classes.smallCirclesWrapper}>
                        <div className={classes.smallCircle}></div>
                        <div className={classes.smallCircle}></div>
                        <div className={classes.smallCircle}></div>
                    </div>
                    <div className={classes.circle}>
                        <img src={arrowRight} alt="arrowRight" title="arrowRight"/>
                    </div>
                </div>
            </div>
            <div className={classes.carouselImages}>
                <img src={ordersImage}/>
            </div>
        </div>
    )
}

export default CarouselComponent;