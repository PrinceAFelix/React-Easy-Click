import React from "react";
import { Button } from "../ui/button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import classes from "./FoodItem.module.css"
import { AddButton } from "../ui/button/AddButton";

export const FoodItem = (props) => {



    const plusIcon = <FontAwesomeIcon icon={faPlus} />;

    return (
        <div className={classes.item_container}>
            <div className={classes.item_holder}>
                <div className={classes.fooditem}>
                    <h2 id={classes.fName}>{props.foodName}</h2>
                    <h2 id={classes.desc}>{props.description}</h2>
                    <h2 id={classes.price}>${props.price}</h2>
                </div>
                <div className={classes.itemcount_holder}>
                    <div className={classes.item_num}>
                        <label>Amount</label>
                        <input type="number" className={classes.input}></input>
                    </div>
                    <span>
                        <AddButton onClick={props.onClick} icon={plusIcon}>Add</AddButton>
                    </span>
                </div>
            </div>
            <hr className={classes.hr} />
        </div>
    )
}