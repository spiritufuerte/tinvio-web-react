import React from 'react';
import classes from './Content.module.scss';


const Content = () => {
    return (
        <main>
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

            </section>
        </main>
    )
}

export default  Content;
