import React from 'react';
import classes from "./MayButton.module.css"

const Maybutton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
}

export default Maybutton;
