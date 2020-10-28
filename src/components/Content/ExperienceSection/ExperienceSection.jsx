import React from 'react';
import classes from './ExperienceSection.module.scss';
import firstScreen from "../../../assets/image/3 Screens/Screen 1.png";
import secondScreen from "../../../assets/image/3 Screens/Screen 2.png";
import thirdScreen from "../../../assets/image/3 Screens/Screen 3.png";
import arrow from "../../../assets/image/icon-24-chevron.svg";
import check from "../../../assets/image/icon-24-check.svg";


const ExperienceSection = () => {
    return (
        <section className={classes.section}>
            <div className={classes.textBlock}>
                <div className={classes.sectionHeader}>Seamless Ordering Experience</div>
                <div className={classes.sectionText}>Increase your sales by 30% with a better checkout experience. Your
                    customers can place orders easily
                    with a few taps on the item list
                </div>
            </div>
            <div className={classes.cardsBlock}>
                <div className={classes.card}>
                    <img src={firstScreen} title='first image'/>
                    <div className={classes.cardTextWrapper}>
                        <div className={classes.cardText}> Select Items</div>
                        <div className={classes.imgArrowWrapper}>
                            <img src={arrow} title='third image'/>
                        </div>
                    </div>
                </div>
                <div className={classes.card}>
                    <img src={secondScreen} title='second image'/>
                    <div className={classes.cardTextWrapper}>
                        <div className={classes.cardText}>Review Order</div>
                        <div className={classes.imgArrowWrapper}>
                            <img src={arrow} title='third image'/>
                        </div>
                    </div>
                </div>
                <div className={classes.card}>
                    <img src={thirdScreen} title='third image'/>
                    <div className={classes.cardTextWrapper}>
                        <div className={classes.cardText}>Send Order</div>
                        <div className={classes.imgArrowWrapper}>
                            <img src={check} title='third image'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection;