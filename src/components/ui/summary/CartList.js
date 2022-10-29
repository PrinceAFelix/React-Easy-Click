import React, { useContext } from "react";
import { CartItem } from "./CartItem";

import CartContext from "../../context/cart-context";

import classes from "./CartList.module.css"

export const CartList = (props) => {
    const cartCtx = useContext(CartContext)

    return (
        <ul className={classes.ul}>
            {
                cartCtx.items.map((item) => (
                    <CartItem key={item.id} id={item.id} foodName={item.foodName} price={item.price} amount={item.amount} />
                ))
            }
        </ul>
    )
}