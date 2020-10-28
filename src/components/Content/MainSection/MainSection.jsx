import React from 'react';
import classes from './MainSection.module.scss';


const MainSection = () => {
    return(
        <section className={classes.mainSection}>
            <div className={classes.boxesImageWrapper}>
            </div>
            <div className={classes.fruitsImageWrapper}>
            </div>
            <div className={classes.title}>FOR A SMARTER SUPPLY CHAIN</div>
            <div className={classes.titleInfo}>
                Take your business to the next level with Tinvio’s Supplier Platform
            </div>
            <button>Get Started Now</button>
            <div className={classes.smallText}>Yes, it’s free 🎉</div>
        </section>
    )
}

export default MainSection;