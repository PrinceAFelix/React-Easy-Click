import React, { useContext } from "react";
import { Button } from "../ui/button/Button";
import classes from "./Header.module.css"
import CartContext from "../context/cart-context";
import IconsContext from "../context/icon-context"

import bgImage from "../../assets/image.png"


export const Header = () => {


    const cartCtx = useContext(CartContext)
    const iconCtx = useContext(IconsContext)


    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1 className={classes.h1}>EasyClick</h1>
                <Button icon={iconCtx.cart} onClick={cartCtx.onToggle}>Your Cart</Button>
            </header>
            <div className={classes.image}>
                <img src={bgImage} alt="" />
            </div>
        </React.Fragment>
    )
}