import React, { useContext } from "react";

import classes from "./CartItem.module.css"


import IconsContext from "../../context/icon-context"
import CartContext from "../../context/cart-context";


export const CartItem = (props) => {

    const iconCtx = useContext(IconsContext)

    const cartCtx = useContext(CartContext)

    const handleAddClick = () => {
        cartCtx.onAddItem({
            id: props.id,
            foodName: props.foodName,
            amount: 1,
            price: props.price
        })
    }

    const handleRemoveClick = () => {
        cartCtx.onRemoveItem(props.id);
    }

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
                    <button onClick={handleRemoveClick} type="button"> {iconCtx.minus} </button>
                    <button onClick={handleAddClick} type="button"> {iconCtx.plus} </button>
                </div>
            </div>
            <hr className={classes.hr} />
        </div>
    )
}