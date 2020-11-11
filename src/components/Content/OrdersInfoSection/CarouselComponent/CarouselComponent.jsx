import React, {useState} from 'react';
import classes from './Carousel.module.scss';
import operationalCostsImage from '../../../../assets/image/Carousel/Operational Costs.png';
import ordersImage from '../../../../assets/image/Carousel/Orders.png';
import analyticsImage from '../../../../assets/image/Carousel/Analytics.png';
import arrowLeft from "../../../../assets/image/icon-24-chevron1.svg";
import arrowRight from "../../../../assets/image/icon-24-chevron.svg";
import cn from 'classnames';

const CarouselComponent = (props) => {

    const imagesUrl = [ordersImage, operationalCostsImage, analyticsImage]

    const [currentImageIndex, setImageIndex] = useState(0);
    const [isHidden, setIsHidden] = useState(false);

    const nextSlideHandler = () => {
        setIsHidden(true);
        setTimeout(() => {
            if (currentImageIndex < imagesUrl.length - 1) {
                setImageIndex(currentImageIndex + 1);
            } else {
                setImageIndex(0);
            }
        }, 400);
        setTimeout(() => {
            setIsHidden(false);
        }, 400)
    }

    const prevSlideHandler = () => {
        setIsHidden(true);
        setTimeout(() => {
            if (currentImageIndex > 0) {
                setImageIndex(currentImageIndex - 1);
            } else {
                setImageIndex(imagesUrl.length - 1);
            }
        }, 400);
        setTimeout(() => {
            setIsHidden(false);
        }, 400)
    }

    return (
        <div className={classes.carousel}>
            <div className={classes.circles}>
                <div className={classes.circles_wrapper}>
                    <div onClick={prevSlideHandler} className={classes.circle}>
                        <img src={arrowLeft} alt="arrowLeft" title="arrowLeft"/>
                    </div>
                    <div className={classes.indicator_wrapper}>
                        <div
                            className={cn(classes.indicator, {[classes.indicator_active]: currentImageIndex === 0})}></div>
                        <div className={cn(classes.indicator, {[classes.indicator_active]: currentImageIndex === 1})}></div>
                        <div className={cn(classes.indicator, {[classes.indicator_active]: currentImageIndex === 2})}></div>
                    </div>
                    <div onClick={nextSlideHandler} className={classes.circle}>
                        <img src={arrowRight} alt="arrowRight" title="arrowRight"/>
                    </div>
                </div>
            </div>
            <div className={classes.carousel_img_bg}>
                <div className={cn(classes.image_wrapper, {[classes.image_wrapper_hidden]: isHidden})}>
                    <img src={imagesUrl[currentImageIndex]} alt='some'/>
                </div>
            </div>
        </div>
    )
}

export default CarouselComponent;