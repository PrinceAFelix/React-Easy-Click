import React, { useState, useReducer } from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    onAddItem: (item) => { },
    onRemoveItem: (id) => { },
    onToggle: () => { },
    isClick: false,
    isBump: false,
});


const defaultState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {

    if (action.type === 'ADD') {

        const exists = state.items.find(item => item.id === action.item.id);

        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;


        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if (action.type === 'REMOVE') {

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
        dispatchCartAction({ type: 'ADD', item: item })
        setCartCtx((prevCtx) => {
            return { ...prevCtx, isBump: true }
        });

    }

    const removeItemHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        onAddItem: addItemHandler,
        onRemoveItem: removeItemHandler,
        onToggle: toggleModalHandler,
        isClick: cartCtx.isToggleModal,
    }

    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartContext;
