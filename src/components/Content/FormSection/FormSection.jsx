import React from 'react';
import classes from './FormSection.module.scss';
import arrow from '../../../assets/image/arrow-1-copy-2@2x.jpg';
import ContactForm from "./ContactForm/ContactForm";
import arrowRight from '../../../assets/image/arrow-right.png';
import LanguageComponent from "./LanguageComponent/LanguageComponent";

const FormSection = () => {
    return (
        <section className={classes.section}>
            <div className={classes.bigCircle}></div>
            <div className={classes.leftPartWrapper}>
                <div className={classes.hint}>LET'S DO THIS</div>
                <div className={classes.mainText}>Fill up the form and we’ll get in touch within
                    a few hours
                </div>
                <div className={classes.pinkCircle}></div>
                <div className={classes.componentWrapper}>
                    <div className={classes.textBefore}>Or meet us in</div>
                    <div className={classes.arrowRightWrapper}>
                        <img src={arrowRight} title='arrow'/>
                    </div>
                </div>
                <div className={classes.blueCircle}></div>
                <LanguageComponent/>
            </div>
            <div>
                <div className={classes.componentWrapper}>
                    <div className={classes.arrowWrapper}>
                        <img src={arrow} title='arrow'/>
                    </div>
                    <div className={classes.textAfter}>Let’s get to know each other</div>
                </div>
                <div className={classes.form}>
                    <ContactForm/>
                </div>
            </div>
        </section>
    )
}

export default FormSection;