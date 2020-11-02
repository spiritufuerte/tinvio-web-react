import React from 'react';
import classes from "./LanguageComponent.module.scss";

const LanguageComponent = () => {
    return (
        <div className={classes.languageBlock}>
            <div>
                <div className={classes.country}>Singapore</div>
                <div className={classes.country}>Australia</div>
                <div className={classes.country}>Hong Kong</div>
                <div className={classes.country}>India</div>
            </div>
            <div>
                <div className={classes.country}>Indonesia</div>
                <div className={classes.country}>Taiwan</div>
                <div className={classes.country}>Thailand</div>
                <div className={classes.country}>Vietnam</div>
            </div>
        </div>
    )
}

export default LanguageComponent;