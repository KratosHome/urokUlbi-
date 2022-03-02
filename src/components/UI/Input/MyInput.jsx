import React from 'react';
import classes from "./Mainput.module.css"

const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.myInput} {...props}/>
    );
})
 
export default MyInput;
