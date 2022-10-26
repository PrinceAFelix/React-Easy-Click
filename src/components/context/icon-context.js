import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faPlus, faMinus, faX } from '@fortawesome/free-solid-svg-icons'


const IconsContext = React.createContext({
    cart: '',
    plus: '',
    minus: '',
    xIcon: '',
});


export const IconContextProvider = (props) => {

    const [icons, setIcons] = useState({
        cart: <FontAwesomeIcon icon={faCartShopping} />,
        plus: <FontAwesomeIcon icon={faPlus} />,
        minus: <FontAwesomeIcon icon={faMinus} />,
        xIcon: <FontAwesomeIcon icon={faX} />
    });

    const iconsCtx = ({
        cart: icons.cart,
        plus: icons.plus,
        minus: icons.minus,
        xIcon: icons.xIcon
    })

    return <IconsContext.Provider value={iconsCtx}>{props.children}</IconsContext.Provider>
}


export default IconsContext