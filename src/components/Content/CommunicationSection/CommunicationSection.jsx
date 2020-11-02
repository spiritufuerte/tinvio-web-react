import React from 'react';
import classes from './CommunicationSection.module.scss';
import beforeImage from '../../../assets/image/Before _ After/Before.png';

const CommunicationSection = () => {
    return (
        <section className={classes.communicationWrapper}>
            <div className={classes.beforeImageWrapper}><img src={beforeImage} title='before image' alt='image'/></div>
            <div className={classes.infoWrapper}>
                <div className={classes.header}>Communication</div>
                <div className={classes.buttonsWrapper}>
                    <button>BEFORE</button>
                    <button id={classes.after}>AFTER</button>
                </div>
                <div className={classes.textHeader}>Old-School Chaos</div>
                <div className={classes.textBody}>Unstructured orders across multiple apps and inboxes. New message
                    notifications and alerts every
                    few minutes
                </div>
            </div>
        </section>
    )
}

export default CommunicationSection;