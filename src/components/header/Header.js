import React from "react";
import { Button } from "../ui/button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import classes from "./Header.module.css"

import bgImage from "../../assets/image.png"


export const Header = () => {

    const iconElement = <FontAwesomeIcon icon={faCartShopping} />;

    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1 className={classes.h1}>EasyClick</h1>
                <Button icon={iconElement} itemNum={5}>Your Cart</Button>
            </header>
            <div className={classes.image}>
                <img src={bgImage} alt="" />
            </div>
        </React.Fragment>
    )
}