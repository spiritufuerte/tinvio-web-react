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
            <div className={classes.steps_wrapper}>
                <div className={classes.block} id={classes.first_block}>
                    <img src={questionImg} title='question image' alt='some'/>
                    <h3>Get in Touch With Us</h3>
                    <p className={classes.first_text}>Full up the form and we'll reach out to you</p>
                </div>
                <div className={classes.line}/>
                <div className={classes.block} id={classes.second_block}>
                    <img src={peopleImg} title='people plus image' alt='some'/>
                    <h3>Connect to Your Clients</h3>
                    <p className={classes.second_text} id={classes.center_text}>They’ll receive a fully guided tutorial on how to order</p>
                </div>
                <div className={classes.line} id={classes.last_line}/>
                <div className={classes.block} id={classes.last_block}>
                    <img src={heartImg} title='heart image' alt='some'/>
                    <h3>Onboarded In a Heartbeat</h3>
                    <p className={classes.third_text}>Activated and live within a day</p>
                </div>
            </div>
        </section>
    )
}

export default SimplesSection;