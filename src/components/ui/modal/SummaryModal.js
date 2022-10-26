import React from "react";

import ReactDOM from "react-dom";


import classes from "./SummaryModal.module.css"


const Backdrop = props => {
    return <div className={classes.backdrop}></div>
}

const Overlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}


const portal = document.getElementById('summary-modal__root')

export const SummaryModal = (props) => {


    return (
        <React.Fragment>
            {
                ReactDOM.createPortal(<Backdrop />, portal)
            }
            {
                ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, portal)
            }
        </React.Fragment>
    )

}