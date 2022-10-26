import React, { useContext } from "react";

import classes from "./CartItem.module.css"


import IconsContext from "../../context/icon-context"



export const CartItem = (props) => {

    const iconCtx = useContext(IconsContext)

    return (
        <div className={classes.cart_container}>
            <div className={classes.cart_item__holder}>
                <div className={classes.item}>
                    <h2 id={classes.fName}>{props.foodName}</h2>
                    <div className={classes.amount}>
                        <h2 id={classes.price}>${props.price.toFixed(2)}</h2>
                        <span className={classes.span}>
                            <span className={classes.icon}>{iconCtx.xIcon}</span>
                            <label htmlFor="amount" className={classes.label}>{props.amount}</label>
                        </span>
                    </div>
                </div>
                <div className={classes.action}>
                    <button type="button"> {iconCtx.minus} </button>
                    <button type="button"> {iconCtx.plus} </button>
                </div>
            </div>
            <hr className={classes.hr} />
        </div>
    )
}