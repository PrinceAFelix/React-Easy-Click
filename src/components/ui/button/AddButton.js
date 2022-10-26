import React, { useContext } from "react";

import classes from "./AddButton.module.css"
import IconsContext from "../../context/icon-context"

export const AddButton = (props) => {


    return (
        <button
            type="submit"
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