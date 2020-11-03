import React from 'react';
import classes from './CommunicationSection.module.scss';
import beforeImage from '../../../assets/image/Before _ After/Before.png';

const CommunicationSection = () => {
    return (
        <section className={classes.section}>
            <img src={beforeImage} title='before image' alt='some'/>
            <div className={classes.info_wrapper}>
                <h1>Communication</h1>
                <div className={classes.buttons_wrapper}>
                    <button>BEFORE</button>
                    <button id={classes.after}>AFTER</button>
                </div>
                <div className={classes.line}></div>
                <h2>Old-School Chaos</h2>
                <p>Unstructured orders across multiple apps and inboxes. New message
                    notifications and alerts every
                    few minutes
                </p>
            </div>
        </section>
    )
}

export default CommunicationSection;