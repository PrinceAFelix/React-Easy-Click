import React from "react";

import classes from "./AddButton.module.css"

export const AddButton = (props) => {
    return (
        <button
            type="button"
            className={classes.button}
            onClick={props.onClick}
        >
            <span className={classes.icon}>
                {props.icon}
            </span>
            <span>{props.children}</span>
        </button>
    )
}