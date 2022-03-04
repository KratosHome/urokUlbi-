import React from 'react';
import lo from "./Loader.module.css"

const Loader = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", marginTop: 50}}>
            <div className={lo.loader}>
            
            </div>
        </div>
    );
}

export default Loader;
