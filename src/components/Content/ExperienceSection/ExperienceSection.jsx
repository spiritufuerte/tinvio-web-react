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
            <div className={classes.section_content}>
                <div className={classes.text_block}>
                    <h1>Seamless Ordering Experience</h1>
                    <p>Increase your sales by 30% with a better checkout experience. Your
                        customers can place orders easily
                        with a few taps on the item list
                    </p>
                </div>
                <div className={classes.cards_wrapper}>
                    <div className={classes.card}>
                        <img src={firstScreen} title='first image' alt='some'/>
                        <div className={classes.card_text_wrapper}>
                            <p> Select Items</p>
                            <img src={arrow} title='third image' alt='some'/>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <img src={secondScreen} title='second image' alt='some'/>
                        <div className={classes.card_text_wrapper}>
                            <p>Review Order</p>
                            <img src={arrow} title='third image' alt='some'/>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <img src={thirdScreen} title='third image' alt='some'/>
                        <div className={classes.card_text_wrapper}>
                            <p>Send Order</p>
                            <img src={check} title='third image' alt='some'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection;