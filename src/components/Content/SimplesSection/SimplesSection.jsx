import React from 'react';
import classes from './SimplesSection.module.scss';
import heartImg from '../../../assets/image/heart.jpg';
import questionImg from '../../../assets/image/question mark.jpg';
import peopleImg from '../../../assets/image/people.jpg';

const SimplesSection = () => {
    return (
        <section className={classes.section}>
            <h2>ARE YOU READY?</h2>
            <h1>3 Simple Steps to Get Started</h1>
            <div className={classes.images_wrapper}>
                <img src={questionImg} title='question image' alt='some'/>
                <div className={classes.line}></div>
                <img src={peopleImg} title='people plus image' alt='some'/>
                <div className={classes.line}></div>
                <img src={heartImg} title='heart image' alt='some'/>
            </div>
            <div className={classes.text_wrapper}>
                <div className={classes.step_info}>
                    <h3>Get in Touch With Us</h3>
                    <p>Full up the form and we'll reach out to you</p>
                </div>
                <div className={classes.step_info}>
                    <h3>Connect to Your Clients</h3>
                    <p>They’ll receive a fully guided tutorial on how to order</p>
                </div>
                <div className={classes.step_info}>
                    <h3>Onboarded In a Heartbeat</h3>
                    <p>Activated and live within a day
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SimplesSection;