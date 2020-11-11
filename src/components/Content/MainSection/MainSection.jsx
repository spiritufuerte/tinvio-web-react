import React from 'react';
import classes from './MainSection.module.scss';


const MainSection = () => {
    return (
        <section className={classes.section}>
            <div className={classes.boxes_image_wrapper}>
            </div>
            <div className={classes.fruits_image_wrapper}>
            </div>
            <div className={classes.content_wrapper}>
                <h1>FOR A SMARTER SUPPLY CHAIN</h1>
                <h2>
                    Take your business to the next level with Tinvio’s Supplier Platform
                </h2>
                <button className={classes.button}>Get Started Now</button>
                <p>Yes, it’s free 🎉</p>
            </div>
        </section>
    )
}

export default MainSection;