import React from "react";

import classes from "./FoodContainer.module.css"
import { Foods } from "./Foods";

export const FoodContainer = () => {
    return (
        <div className={classes.container}>
            <Foods />
        </div>
    )
}