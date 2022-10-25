import React, { useContext } from "react";
import FoodContext from "../context/food-context"
import { FoodItem } from "./FoodItem";


import classes from "./Foods.module.css"

export const Foods = (props) => {
    const ctx = useContext(FoodContext);

    return (
        <ul className={classes.ul}>
            {
                ctx.foodList.map((food) => (
                    <FoodItem key={food.id} foodName={food.food} description={food.description} price={food.price} />
                ))
            }
        </ul>
    )
}