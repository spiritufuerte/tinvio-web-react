import React from 'react';
import classes from "./LanguageComponent.module.scss";

const LanguageComponent = () => {
    return (
        <div className={classes.language_block}>
            <div>
                <div className={classes.country}>
                    <img title="SG" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/sg.svg"/>
                    <p>Singapore</p>
                </div>
                <div className={classes.country}>
                    <img title="AU" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/au.svg" />
                    <p>Australia</p>
                </div>
                <div className={classes.country}>
                    <img title="HK" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/hk.svg" />
                    <p>Hong Kong</p>
                </div>
                <div className={classes.country}>
                    <img title="IN" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/in.svg"/>
                    <p>India</p>
                </div>

            </div>
            <div>
                <div className={classes.country}>
                    <img title="ID" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/id.svg"/>
                    <p>Indonesia</p>
                </div>
                <div className={classes.country}>
                    <img title="TW" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/tw.svg" />
                    <p>Taiwan</p>
                </div>
                <div className={classes.country}>
                    <img title="TH" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/th.svg" />
                    <p>Thailand</p>
                </div>
                <div className={classes.country}>
                    <img title="VN" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/vn.svg"/>
                    <p>Vietnam</p>
                </div>
            </div>
        </div>
    )
}

export default LanguageComponent;