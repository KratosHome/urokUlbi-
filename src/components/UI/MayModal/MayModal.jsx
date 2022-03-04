import React from 'react';
import cl from "./MayModal.module.css"

const MayModal = ({ children, visible, setVisible }) => {

    const rootClasses = [cl.myMoadl]
    if(visible === true ) {
        rootClasses.push(cl.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={()=>setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e)=> e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default MayModal;
