import React from 'react';
import classes from "./LanguageComponent.module.scss";

const LanguageComponent = () => {
    return (
        <div className={classes.language_block}>
            <div>
                <p>Singapore</p>
                <p>Australia</p>
                <p>Hong Kong</p>
                <p>India</p>
            </div>
            <div>
                <p>Indonesia</p>
                <p>Taiwan</p>
                <p>Thailand</p>
                <p>Vietnam</p>
            </div>
        </div>
    )
}

export default LanguageComponent;