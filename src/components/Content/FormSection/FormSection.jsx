import React from 'react';
import classes from './FormSection.module.scss';
import ContactForm from "./ContactForm/ContactForm";
import arrowRight from '../../../assets/image/arrow-right.png';
import LanguageComponent from "./LanguageComponent/LanguageComponent";

const FormSection = () => {
    return (
        <section className={classes.section}>
            <div className={classes.section_content}>
                <div className={classes.violet_circle}></div>
                <div className={classes.pink_circle}></div>
                <div className={classes.blue_circle}></div>
                <div className={classes.contact_block}>
                    <div className={classes.header_text}>
                        <h3>LET'S DO THIS</h3>
                        <h1>Fill up the form and we’ll get in touch within<br/> a few hours</h1>
                    </div>
                    <div className={classes.form_block}>
                        <div className={classes.arrow_wrapper}>
                            <img src={arrowRight} title='arrow' alt='some'/>
                            <p>Let’s get to know each other</p>
                        </div>
                        <ContactForm/>
                    </div>
                </div>
                <div className={classes.language_block}>
                    <div className={classes.arrow_lang_wrapper}>
                        <img src={arrowRight} title='arrow' alt='some'/>
                        <p>Or meet us in</p>
                    </div>
                    <LanguageComponent/>
                </div>
            </div>
        </section>
    )
}

export default FormSection;