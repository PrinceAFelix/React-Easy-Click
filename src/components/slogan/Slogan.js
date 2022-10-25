import React from "react";
import { Card } from "../ui/card/Card";

import classes from "./Slogan.module.css"

export const Slogan = () => {
    return (
        <div className={classes.container}>
            <h2 className={classes.h2}>Delicious Food, Delivered To You</h2>
            <span className={classes.span}>
                Choose your favourite food from our board selection of available foods and enjoy a delicious lunch or dinner at home
            </span>
            <br />
            <span className={classes.span}>
                All our foods are cooked with hig-quality ingridients, just-in-time and of course by expereinced chefs!
            </span>
        </div>
    )
}