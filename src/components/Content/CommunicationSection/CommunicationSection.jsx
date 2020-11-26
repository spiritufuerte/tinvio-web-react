import React, {useState} from 'react';
import classes from './CommunicationSection.module.scss';
import beforeImage from '../../../assets/image/Before _ After/Before.png';
import cn from 'classnames';
import Lottie from 'react-lottie';
import animationData from '../../../assets/image/Before _ After/animation.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const CommunicationSection = () => {

    const [isBeforeImg, setIsBeforeImg] = useState(true);
    const [isHidden, setIsHidden] = useState(false);

    const beforeClickHandler = () => {
        setIsHidden(true);
        setTimeout(() => setIsBeforeImg(true), 400);
        setTimeout(() => {
            setIsHidden(false);
        }, 400);
    }

    const afterClickHandler = () => {
        setIsHidden(true);
        setTimeout(() => setIsBeforeImg(false), 400);
        setTimeout(() => {
            setIsHidden(false);
        }, 400);
    }

    return (
        <section className={classes.section}>
            <div className={classes.section_content}>
                <div className={classes.section_img}>
                    {isBeforeImg  ?
                        <img src={beforeImage} title='before image' alt='some'/> :
                        <Lottie options={defaultOptions} width={'100%'} height={'100%'}/>
                    }
                </div>
                <div className={classes.section_header}>
                    <h1>Communication</h1>
                        <button
                            className={cn(classes.button, {[classes.button_active]: isBeforeImg})}
                            onClick={beforeClickHandler}>BEFORE
                        </button>
                        <button
                            className={cn(classes.button, {[classes.button_active]: !isBeforeImg})}
                            onClick={afterClickHandler}>AFTER
                        </button>

                </div>
                <div className={classes.section_text}>
                    <div className={classes.line}/>
                    <h2>Old-School Chaos</h2>
                    <p>Unstructured orders across multiple apps and inboxes. New message
                        notifications and alerts every
                        few minutes
                    </p>
                </div>
            </div>
        </section>
    )
}

export default CommunicationSection;