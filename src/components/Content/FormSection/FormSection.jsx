import React from 'react';
import classes from './FormSection.module.scss';
import arrow from '../../../assets/image/arrow-1-copy-2@2x.jpg';
import ContactForm from "./ContactForm/ContactForm";
import arrowRight from '../../../assets/image/arrow-right.png';
import LanguageComponent from "./LanguageComponent/LanguageComponent";

const FormSection = () => {
    return (
        <section className={classes.section}>
            <div className={classes.big_circle}></div>
            <div className={classes.left_part}>
                <h3>LET'S DO THIS</h3>
                <h1>Fill up the form and we’ll get in touch within
                    a few hours
                </h1>
                <div className={classes.pink_circle}></div>
                <div className={classes.left_arrow_block}>
                    <p>Or meet us in</p>
                    <img src={arrowRight} title='arrow' alt='some'/>
                </div>
                <div className={classes.blue_circle}></div>
                <LanguageComponent/>
            </div>
            <div>
                <div className={classes.right_arrow_block}>
                        <img src={arrow} title='arrow' alt='some'/>
                    <p>Let’s get to know each other</p>
                </div>
                <div className={classes.contact_form}>
                    <ContactForm/>
                </div>
            </div>
        </section>
    )
}

export default FormSection;