import React from "react";

import classes from "./Button.module.css"

export const Button = (props) => {




    return (
        <button
            type={props.type || 'button'}
            className={`${classes.button} ${props.className}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            <span className={classes.icon}>
                {props.icon}
            </span>
            <span>{props.children}</span>
            <span className={classes.itemNum}>
                {props.itemNum}
            </span>

        </button>
    )
}