import React, { useRef, useState, useContext } from "react";

import { AddButton } from "../ui/button/AddButton";
import classes from "./FoodItemForm.module.css"
import { Input } from "../ui/input/Input";
import IconsContext from "../context/icon-context"

export const FoodItemForm = (props) => {

    const [isClick, setIsClick] = useState(false);
    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountRef = useRef();


    const iconCtx = useContext(IconsContext)



    const submitHandler = (event) => {
        event.preventDefault();

        const amount = amountRef.current.value;
        const amountNum = +amount;

        if (amount.trim().length === 0 || amountNum < 1 || amountNum > 5) {
            setAmountIsValid(false)
            return;
        }
        setIsClick((prevCtx) => {
            return { ...prevCtx, isClick: !isClick }
        });

        props.onAddToCart(amountNum);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label="Amount" ref={amountRef} input={{
                id: 'amount' + props.id,
                type: 'number',
                min: 1,
                max: 5,
                step: '1',
                defaultValue: '1'
            }} />
            <AddButton icon={iconCtx.plus}>Add</AddButton>
        </form>
    )
}

