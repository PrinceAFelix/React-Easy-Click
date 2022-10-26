import React, { useContext } from "react";
import classes from "./FoodItem.module.css"
import { FoodItemForm } from "../form/FoodItemForm";
import CartContext from "../context/cart-context";
import { IconContextProvider } from "../context/icon-context";


export const FoodItem = (props) => {


    const price = `$${props.price.toFixed(2)}`;
    const cartCtx = useContext(CartContext);

    const addtoCartHandler = (amount) => {
        cartCtx.onAddItem({
            id: props.id,
            foodName: props.foodName,
            amount: amount,
            price: props.price
        })
    }

    return (
        <div className={classes.item_container}>
            <div className={classes.item_holder}>
                <div className={classes.fooditem}>
                    <h2 id={classes.fName}>{props.foodName}</h2>
                    <h2 id={classes.desc}>{props.description}</h2>
                    <h2 id={classes.price}>{price}</h2>
                </div>
                <IconContextProvider>
                    <FoodItemForm onAddToCart={addtoCartHandler} id={props.id} />
                </IconContextProvider>
            </div>
            <hr className={classes.hr} />
        </div>
    )
}