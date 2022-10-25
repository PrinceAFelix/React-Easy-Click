import React, { useContext } from "react";
import { FoodContainer } from "../../food/FoodContainer";
import { Slogan } from "../../slogan/Slogan";

import classes from "./Home.module.css"

export const Home = (props) => {


    return (
        <div className={classes.main}>
            <Slogan />
            <FoodContainer />
        </div>
    )
}