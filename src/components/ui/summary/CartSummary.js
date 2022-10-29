import React, { useContext } from "react";
import { SummaryModal } from "../modal/SummaryModal";
import CartContext from "../../context/cart-context";


import classes from "./CartSummary.module.css"
import { CartList } from "./CartList";
import { IconContextProvider } from "../../context/icon-context";

export const CartSummary = (props) => {

    const cartCtx = useContext(CartContext);

    const totalAmount = cartCtx.items.reduce((current, item) => {
        return current + item.price * item.amount;
    }, 0)

    const onOrder = () => {
        cartCtx.onOrder()
    }
    return (
        <SummaryModal>
            <IconContextProvider>
                <CartList />
            </IconContextProvider>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${totalAmount.toFixed(2)}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={cartCtx.onToggle}>Close</button>
                <button onClick={onOrder} className={classes.button}>Order</button>
            </div>
        </SummaryModal>
    )
}