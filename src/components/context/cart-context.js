import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useReducer } from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    onAddItem: (item) => { },
    onRemoveItem: (id) => { },
    onToggle: () => { },
    onOrder: () => { },
    isClick: false,
    isBump: false,
});


const defaultState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {

    if (action.type === 'ADD') {

        const exists = state.items.find(item => { return item.id === action.item.id });
        let updatedItems = state.items.concat(action.item);
        if (exists !== undefined) {
            updatedItems = state.items;
        }

        let updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount

        }
    }

    if (action.type === 'REMOVE') {

        let temp = [];

        state.items.forEach(item => {

            if (item.id !== action.id) {
                temp.push(item)
            } else {
                if (item.amount !== 1) {
                    item.amount -= 1;
                    temp.push(item)
                }
            }

        });

        let updatedItems = (temp);

        return {
            items: updatedItems,
        }
    }

    if (action.type === 'ORDER') {
        return defaultState;
    }

    return defaultState;
}



export const CartContextProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);

    let [cartCtx, setCartCtx] = useState({
        isToggleModal: false,
        isBump: false,
    })

    const toggleModalHandler = () => {
        setCartCtx((prevCtx) => {
            return { ...prevCtx, isToggleModal: !cartCtx.isToggleModal }
        });
    }

    const addItemHandler = (item) => {

        const exists = cartState.items.find(a => { return a.id === item.id });

        if (exists !== undefined) {
            exists.amount += item.amount;
            item = exists;
            console.log(item)
        }

        setCartCtx((prevCtx) => {
            return { ...prevCtx, isBump: true }
        });

        setTimeout(() => {
            setCartCtx((prevCtx) => {
                return { ...prevCtx, isBump: false }
            });
        }, 200)

        dispatchCartAction({ type: 'ADD', item: item })

    }

    const removeItemHandler = (id) => {

        dispatchCartAction({ type: 'REMOVE', id: id })
    }

    const handleOrder = () => {
        alert("works");
        toggleModalHandler();
        dispatchCartAction({ type: 'ORDER' })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        onAddItem: addItemHandler,
        onRemoveItem: removeItemHandler,
        onToggle: toggleModalHandler,
        onOrder: handleOrder,
        isClick: cartCtx.isToggleModal,
        isBump: cartCtx.isBump,
    }




    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartContext;
