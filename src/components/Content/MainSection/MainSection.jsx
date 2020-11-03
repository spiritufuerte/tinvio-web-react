import React from 'react';
import classes from './MainSection.module.scss';


const MainSection = () => {
    return(
        <section className={classes.section}>
            <div className={classes.boxes_image_wrapper}>
            </div>
            <div className={classes.fruits_image_wrapper}>
            </div>
            <h1>FOR A SMARTER SUPPLY CHAIN</h1>
            <h2>
                Take your business to the next level with Tinvio’s Supplier Platform
            </h2>
            <button>Get Started Now</button>
            <p>Yes, it’s free 🎉</p>
        </section>
    )
}

export default MainSection;