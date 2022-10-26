import React, { useContext } from "react";

import classes from "./Button.module.css"
import CartContext from "../../context/cart-context";


export const Button = (props) => {

    const cartCtx = useContext(CartContext)

    const numOfItems = cartCtx.items.reduce((current, item) => {

        return current + item.amount;
    }, 0);


    return (
        <button
            type={props.type || 'button'}
            className={`${classes.button} ${props.className} ${cartCtx.isBump ? classes.bump : ''}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            <span className={classes.icon}>
                {props.icon}
            </span>
            <span>{props.children}</span>
            <span className={classes.itemNum}>
                {numOfItems.toString()}
            </span>

        </button>
    )
}