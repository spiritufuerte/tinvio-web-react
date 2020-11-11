import React, {useState} from 'react';
import classes from './CommunicationSection.module.scss';
import beforeImage from '../../../assets/image/Before _ After/Before.png';
import afterImage from '../../../assets/image/Before _ After/AfterCopy.png';
import cn from 'classnames';

const CommunicationSection = () => {

    const [mainImg, setMainImg] = useState(beforeImage);
    const [isHidden, setIsHidden] = useState(false);

    const beforeClickHandler = () => {
        setIsHidden(true);
        setTimeout(() => setMainImg(beforeImage), 400);
        setTimeout(() => {
            setIsHidden(false);
        }, 400);
    }

    const afterClickHandler = () => {
        setIsHidden(true);
        setTimeout(() => setMainImg(afterImage), 400);
        setTimeout(() => {
            setIsHidden(false);
        }, 400);
    }

    return (
        <section className={classes.section}>
            <div className={classes.section_content}>
                <div className={classes.first_block}>
                    <div className={classes.header_text_wrapper}>
                        <h1>Communication</h1>
                        <div className={classes.buttons_wrapper}>
                            <button
                                className={cn(classes.button, {[classes.button_active]: mainImg === beforeImage})}
                                onClick={beforeClickHandler}>BEFORE
                            </button>
                            <button
                                className={cn(classes.button, {[classes.button_active]: mainImg === afterImage})}
                                onClick={afterClickHandler}>AFTER
                            </button>
                        </div>
                    </div>

                        <img className={cn(classes.image_wrapper, {[classes.image_wrapper_hidden]: isHidden})}  src={mainImg} title='before image' alt='some'/></div>

                <div className={classes.second_block}>
                    <div className={classes.line}></div>
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