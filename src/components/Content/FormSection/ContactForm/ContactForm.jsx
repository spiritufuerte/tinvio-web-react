import React from 'react';
import classes from './ContactForm.module.scss';


const ContactForm = () => {
    return (
        <form className={classes.form}>
            <div className={classes.input_wrapper}>
                <h1>Hi, we are Tinvio! And you?</h1>
                <div className={classes.input_text}><input type='text' placeholder='Name'/></div>
                <div className={classes.input_text}><input type='text' placeholder='Business Name'/></div>
                <div className={classes.input_tel}>
                    <input className={classes.first_numbers} type='tel' placeholder='+65'/>
                    <input className={classes.last_numbers} type='tel'/>
                </div>
                <div className={classes.buttons_wrapper}>
                    <button type="submit">Get Started</button>
                    <p>No spam, promise 🙌</p>
                </div>
            </div>
        </form>

    )
}

export default ContactForm;