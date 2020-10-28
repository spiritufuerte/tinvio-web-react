import React from 'react';
import classes from './SimplesSection.module.scss';
import heartImg from '../../../assets/image/heart.jpg';
import questionImg from '../../../assets/image/question mark.jpg';
import peopleImg from '../../../assets/image/people.jpg';

const SimplesSection = () => {
    return (
        <section className={classes.section}>
            <div className={classes.questionText}>ARE YOU READY?</div>
            <div className={classes.headerText}>3 Simple Steps to Get Started</div>
            <div className={classes.imagesWrapper}>
                <div className={classes.imageWrapper}><img src={questionImg} title='question image'/></div>
                <div className={classes.rectangle}></div>
                <div className={classes.imageWrapper}><img src={peopleImg} title='people plus image'/></div>
                <div className={classes.rectangle}></div>
                <div className={classes.imageWrapper}><img src={heartImg} title='heart image'/></div>
            </div>
            <div className={classes.stepsInfoWrapper}>
                <div className={classes.stepText}>
                    <div className={classes.stepHeader}>Get in Touch With Us</div>
                    <div className={classes.stepInfo}>Full up the form and we'll reach out to you</div>
                </div>
                <div className={classes.stepText}>
                    <div className={classes.stepHeader}>Connect to Your Clients</div>
                    <div className={classes.stepInfo}>They’ll receive a fully guided tutorial on how to order</div>
                </div>
                <div className={classes.stepText}>
                    <div className={classes.stepHeader}>Onboarded In a Heartbeat</div>
                    <div className={classes.stepInfo}>Activated and live within a day
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SimplesSection;